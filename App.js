import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { StatusBar } from 'react-native';
export default class Welcome extends Component {
  state = {
    trangValue: 0,
    vangValue: 0,
    winValue: 0
  };
  _onChangeText = value => {
    this.setState({
      nameValue: value,
    });
  };
  componentDidMount() {
    StatusBar.setHidden(true);
 }
  render() {
    return (
     <View >
       <Text>ABC</Text>
     </View>
    );
  }
}