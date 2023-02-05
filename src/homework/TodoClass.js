import React from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import typeData from './typeData';
import TypeItem from './TypeItem';
import data from './data';

class TodoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeData: typeData,
      todos: data,
    };
  }
  // 已完成\未完成
  handlePress = id => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });
    this.setState({todos: newTodos});
    Actions.refresh({todos: newTodos});
  };
  // 新增事項
  handleAddTodo = todo => {
    this.setState(
      {
        todos: [
          ...this.state.todos,
          {
            id: this.state.todos.length + 1,
            time: new Date().getHours() + ':' + new Date().getMinutes(),
            ...todo,
          },
        ],
      },
      () => {
        console.log('s');
        Actions.refresh({todos: this.state.todos, refresh: Math.random()});
      },
    );
    //這邊好像來是會比較卡 算惹
  };
  // 修改事項
  handleUpdateTodo = todoData => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === todoData.id ? todoData : todo;
    });
    this.setState({todos: newTodos}, () => {
      Actions.refresh({todos: this.state.todos, refresh: Math.random()});
    });
  };
  // 切換類別
  ClassPress = name => {
    Actions.todoList({
      todos: this.state.todos,
      TodoClass: name,
      onPress: this.handlePress,
      handleAddTodo: this.handleAddTodo,
      handleUpdateTodo: this.handleUpdateTodo,
      onLeftSwipeable: this.renderLeftActions,
      onRightSwipeable: this.renderRightActions,
      rightActionsPress: this.rightActionsPress,
      leftActionsPress: this.leftActionsPress,
    });
  };
  // 左滑動
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#4ba5f7',
          borderRadius: 50,
          margin: 10,
          justifyContent: 'center',
        }}>
        <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontWeight: '600',
          }}>
          修改
        </Animated.Text>
      </View>
    );
  };
  // 左滑動修改資料
  leftActionsPress = (todo, toggleModal) => {
    toggleModal();
    //Actions.TodoForm({todo: todo, handleUpdateTodo: this.handleUpdateTodo});
  };
  // 右滑動
  renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ff5916',
          borderRadius: 50,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontWeight: '600',
          }}>
          刪除
        </Animated.Text>
      </View>
    );
  };
  // 右滑動刪除
  rightActionsPress = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
    Actions.refresh({todos: newTodos});
  };

  render() {
    const {typeData} = this.state;
    return (
      <View style={styles.content}>
        <Text style={styles.subtitle}>項目</Text>
        <TypeItem name="全部" onPress={this.ClassPress} />
        <Text style={styles.line}></Text>
        {typeData.map(type => {
          return <TypeItem name={type} onPress={this.ClassPress} />;
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subtitle: {
    color: '#000',
    marginTop: 35,
    margin: 15,
    marginBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
  content: {
    padding: 10,
    paddingTop: 0,
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(200, 200, 200 ,0.2)',
    alignSelf: 'stretch',
  },
});
export default TodoClass;
