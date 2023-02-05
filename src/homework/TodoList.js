import React from 'react';
import {Button, Text, View, ScrollView, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';
import ModalBotton from './ModalBotton';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //修改用
      todo: null,
      isModalVisible: false,
    };
  }
  //修改哪一筆的資料
  updateTodoData = todo => {
    this.setState({todo: todo}, () => {
      this.toggleModal();
    });
  };
  //視窗作動
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '新增',
      onRight: () => {
        this.toggleModal();
      },
      title: this.props.TodoClass,
    });
  }

  render() {
    const {isModalVisible, todo} = this.state;
    const {
      todos,
      TodoClass,
      onPress,
      onLeftSwipeable,
      onRightSwipeable,
      rightActionsPress,
      leftActionsPress,
    } = this.props;
    const unCompletedTodos =
      TodoClass === '全部'
        ? todos.filter(todo => todo.completed === false)
        : todos.filter(
            todo => todo.completed === false && todo.type === TodoClass,
          );

    const completedTodos =
      TodoClass === '全部'
        ? todos.filter(todo => todo.completed === true)
        : todos.filter(
            todo => todo.completed === true && todo.type === TodoClass,
          );

    return (
      <View style={styles.body}>
        <ScrollView style={styles.content}>
          <Text style={styles.subtitle}>未完成</Text>
          <Text style={styles.subSuggest}>左右滑動來修改/刪除事項</Text>
          <View style={styles.todoItme}>
            {unCompletedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onPress={onPress}
                onLeftSwipeable={onLeftSwipeable}
                onRightSwipeable={onRightSwipeable}
                rightActionsPress={rightActionsPress}
                leftActionsPress={leftActionsPress}
                toggleModal={this.toggleModal}
                updateTodoData={this.updateTodoData}
              />
            ))}
          </View>
          <Text style={styles.subtitle}>已完成</Text>
          <View style={styles.todoItme}>
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onPress={onPress}
                onLeftSwipeable={onLeftSwipeable}
                onRightSwipeable={onRightSwipeable}
                rightActionsPress={rightActionsPress}
                leftActionsPress={leftActionsPress}
                toggleModal={this.toggleModal}
                updateTodoData={this.updateTodoData}
              />
            ))}
          </View>
          <ModalBotton
            isModalVisible={isModalVisible}
            toggleModal={this.toggleModal}
            handleAddTodo={this.props.handleAddTodo}
            handleUpdateTodo={this.props.handleUpdateTodo}
            updateTodoData={this.updateTodoData}
            todo={todo}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  nearbar: {
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    alignSelf: 'center',
    borderRadius: 11.5,
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    marginLeft: 10,
    borderColor: '#878787',
    borderWidth: 0.5,
  },
  title: {
    color: '#333',
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 7,
  },
  subtitle: {
    color: '#000',
    marginTop: 35,
    margin: 15,
    marginBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subSuggest: {
    color: '#8f8f8f',
    marginLeft: 15,
  },
  todoItme: {
    marginTop: 15,
  },
  info: {
    alignSelf: 'center',
    borderRadius: 11.5,
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    marginRight: 10,
    borderColor: '#878787',
    borderWidth: 0.5,
  },
  content: {
    padding: 10,
    paddingTop: 0,
  },
});
export default TodoList;
