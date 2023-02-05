import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import style from './style';

function TodoItem(props) {
  const {
    todo: {completed, title, content, time, statue, id},
    onPress,
    onLeftSwipeable,
    onRightSwipeable,
    rightActionsPress,
    updateTodoData,
  } = props;
  const completedIcon = 'https://i.imgur.com/jxsdKdh.png';
  const unCompletedIcon = 'https://i.imgur.com/zrs3alB.png';
  const borderColor = (status, completed) => {
    if (completed) {
      return style.itemsBorderdGrey;
    }
    switch (status) {
      case 'danger':
        return style.itemsBorderdRed;
      case 'warning':
        return style.itemsBorderdYellow;
      default:
        return style.itemsBorderdBlue;
    }
  };

  return (
    <Swipeable
      renderLeftActions={onLeftSwipeable}
      renderRightActions={onRightSwipeable}
      onSwipeableLeftWillOpen={() => {
        updateTodoData(props.todo);
      }}
      onSwipeableRightWillOpen={() => rightActionsPress(id)}
      rightThreshold="20">
      <TouchableOpacity
        onPress={() => onPress(id)}
        style={[
          style.items,
          borderColor(statue, completed),
          completed ? style.opti : '',
        ]}>
        <View style={style.imgContent}>
          <Image
            source={{uri: completed ? completedIcon : unCompletedIcon}}
            style={style.img}
          />
        </View>
        <View style={style.content}>
          <Text
            style={[completed ? style.itemTitlecheck : style.itemTitleUncheck]}>
            {title}
          </Text>
          <Text style={style.itemContent}>{content}</Text>
        </View>
        <Text
          style={[completed ? style.itemClockcheck : style.itemClockUncheck]}>
          {time}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  );
}

export default TodoItem;
