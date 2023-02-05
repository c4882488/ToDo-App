import React from 'react';
import {View, Text} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {CardStyleInterpolators} from '@react-navigation/stack';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoClass from './TodoClass';

const Route = () => {
  return (
    <Router>
      <Stack key="root" headerLayoutPreset="center">
        <Scene
          key="todoList"
          component={TodoList}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          title="待辦清單"
          back
        />
        <Scene key="TodoForm" component={TodoForm} title="新增待辦" back />
        <Scene
          key="TodoClass"
          component={TodoClass}
          title="Todo"
          initial
          onLeft={() => {
            alert('C108156102 邱暉祐');
          }}
          leftTitle={
            <View>
              <Text>C108156102</Text>
              <Text>邱暉祐</Text>
            </View>
          }
          leftButtonTextStyle={{
            fontSize: 14,
            color: 'black',
            fontWeight: 'bold',
          }}
        />
      </Stack>
    </Router>
  );
};
export default Route;
