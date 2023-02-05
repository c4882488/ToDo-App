import React from 'react';
import {View, Button} from 'react-native';
import TodoForm from './TodoForm';
import Modal from 'react-native-modal';

class ModalBotton extends React.Component {
  render() {
    const {
      toggleModal,
      handleAddTodo,
      isModalVisible,
      todo,
      handleUpdateTodo,
      updateTodoData,
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={isModalVisible}
        style={{
          margin: 0,
        }}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}>
        <View
          style={{
            height: '68%',
            width: '100%',
            marginTop: 'auto',
            backgroundColor: '#F8F8F8',
            justifyContent: 'space-around',
          }}>
          <View>
            <View
              style={{
                height: 35,
                width: 35,
                alignSelf: 'flex-end',
                marginRight: 15,
                overflow: 'hidden',
                borderRadius: 50,
              }}>
              <Button
                title="×"
                onPress={() => {
                  toggleModal();
                }}
                style={{backgroundColor: '#F8F8F8'}}
              />
            </View>
            <TodoForm
              handleAddTodo={handleAddTodo}
              handleUpdateTodo={handleUpdateTodo}
              updateTodoData={updateTodoData}
              todo={todo}
              toggleModal={toggleModal}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalBotton;
