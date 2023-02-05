import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 0.9,
    marginLeft: 13,
  },
  items: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    paddingLeft: 20,
    paddingRight: 23,
    borderRadius: 50,
    elevation: 3,
  },
  opti: {
    opacity: 0.8,
  },
  itemTitleUncheck: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#3f3f3f',
  },
  itemTitlecheck: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 3,
    color: '#9f9f9f',
    textDecorationLine: 'line-through',
  },
  itemContent: {
    color: '#8f8f8f',
    marginLeft: 10,
    fontSize: 12,
  },
  itemClockcheck: {
    alignSelf: 'center',
    color: '#9f9f9f',
  },
  itemClockUncheck: {
    alignSelf: 'center',
    color: '#333',
  },
  itemsBorderdBlue: {
    borderColor: '#5CAFFF',
    borderWidth: 1.2,
  },
  itemsBorderdRed: {
    borderColor: '#FF7171',
    borderWidth: 1.2,
  },
  itemsBorderdYellow: {
    borderColor: '#FFD547',
    borderWidth: 1.2,
  },
  itemsBorderdGrey: {
    borderColor: '#bcbcbc',
    borderWidth: 1.2,
  },
  img: {
    width: 30,
    height: 30,
  },
  imgContent: {
    alignSelf: 'center',
    flex: 0.1,
  },
});

export default styles;
