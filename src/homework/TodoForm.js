import React from 'react';
import {Text, View, TextInput, StyleSheet, Switch, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Actions} from 'react-native-router-flux';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'life',
      title: null,
      content: null,
      statue: 'general',
      completed: false,
      id: null,
      time: null,
    };
  }
  // 變更待辦類型的選取值
  handleChangeStatus = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handlePress = () => {
    if (this.props.todo) {
      const {handleUpdateTodo, updateTodoData} = this.props;

      this.props.toggleModal();
      // Actions.pop({refresh: Math.random()});
      updateTodoData(null);

      handleUpdateTodo(this.state);
    } else {
      const {handleAddTodo} = this.props;

      this.props.toggleModal();
      // Actions.pop({
      //   refresh: Math.random(),
      // });
      const addData = {
        type: this.state.type,
        title: this.state.title,
        content: this.state.content,
        statue: this.state.statue,
        completed: this.state.completed,
      };
      handleAddTodo(addData);
    }

    this.setState({
      type: 'life',
      title: null,
      content: null,
      statue: 'general',
      completed: false,
      id: null,
      time: null,
    });
  };

  componentDidMount() {
    console.log(todo);
    const {todo} = this.props;
    if (todo) {
      this.setState({
        type: todo.type,
        title: todo.title,
        content: todo.content,
        statue: todo.statue,
        completed: todo.completed,
        id: todo.id,
        time: todo.time,
      });
    }
  }

  render() {
    const {todo} = this.props;
    const {type, title, content, statue, completed} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titles}>待辦類型</Text>
          <View style={styles.pickerBorder}>
            <Picker
              name="type"
              selectedValue={type}
              onValueChange={val => this.handleChangeStatus('type', val)}
              style={styles.formPicker}>
              <Picker.Item label="生活" value="life" />
              <Picker.Item label="工作" value="work" />
              <Picker.Item label="娛樂" value="entertainment" />
            </Picker>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>待辦標題</Text>
          <View style={styles.textPadding}>
            <TextInput
              name="title"
              value={title}
              onChangeText={val => this.handleChangeStatus('title', val)}
              style={styles.formTextInput}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>備註事項</Text>
          <View style={styles.textPadding}>
            <TextInput
              name="content"
              value={content}
              onChangeText={val => this.handleChangeStatus('content', val)}
              style={styles.formTextInput}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>狀態</Text>
          <View style={styles.pickerBorder}>
            <Picker
              name="statue"
              selectedValue={statue}
              onValueChange={val => this.handleChangeStatus('statue', val)}
              style={styles.formPicker}>
              <Picker.Item label="General" value="general" />
              <Picker.Item label="Warning" value="warning" />
              <Picker.Item label="Danger" value="danger" />
            </Picker>
          </View>
        </View>
        <View style={[styles.content, styles.item]}>
          <Text style={styles.titles}>是否完成</Text>
          <Switch
            name="completed"
            value={completed}
            onValueChange={val => this.handleChangeStatus('completed', val)}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={completed ? '#767577' : '#81b0ff'}
            style={styles.formSwitch}
          />
        </View>
        <View style={[styles.content, styles.button]}>
          <Button
            style={styles.buttons}
            title={todo ? 'Update Todo' : 'Add Todo'}
            color="#81b0ff"
            disabled={!title || !content}
            onPress={this.handlePress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
  },
  titles: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 15,
  },
  content: {
    marginTop: 20,
  },
  pickerBorder: {
    marginTop: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  formPicker: {
    color: '#000',
    backgroundColor: '#fff',
  },
  formTextInput: {
    color: '#000',
    backgroundColor: '#fff',
    padding: 13,

    //marginLeft: 20,
  },
  formSwitch: {
    color: '#000',
    marginLeft: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginVertical: 5,
    //paddingHorizontal: 10,
  },
  button: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  buttons: {
    padding: 15,
    margin: 10,
  },
  textPadding: {
    marginTop: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default TodoForm;
