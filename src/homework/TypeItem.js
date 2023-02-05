import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class TypeItem extends React.Component {
  render(props) {
    const {name, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.items} onPress={() => onPress(name)}>
        <View style={styles.iconContent}>
          <Text style={styles.subtitle}>＞</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  items: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 20,
    paddingRight: 23,
    borderRadius: 50,
    elevation: 3,
  },
  iconContent: {
    flex: 0.1,
  },
  content: {
    flex: 0.9,
  },
  subtitle: {},
});
export default TypeItem;
