import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'react-native';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('vn-VI');
export default class Welcome extends Component {
  state = {
    trangValue: 0,
    vangValue: 0,
    winValue: 20
  };
  _onPressTrang = () => {
    if (this.state.trangValue < this.state.winValue) {
      this.setState({
        trangValue: this.state.trangValue + 1,
      })
    };
    Tts.stop();
    Tts.getInitStatus().then(() => {
      if (this.state.trangValue == this.state.vangValue) {
        Tts.speak(this.state.trangValue + "Đều");
      }
      else {
        Tts.speak(this.state.trangValue + "");
        Tts.speak(this.state.vangValue + "");
      }
      if (this.state.trangValue == this.state.winValue) {
        Tts.speak("Chiến thắng");
      }
    });
  }
  _onTruTrang = () => {
    if (this.state.trangValue < this.state.winValue) {
      this.setState({
        trangValue: this.state.trangValue - 1,
      })
    };
    Tts.stop();
    Tts.getInitStatus().then(() => {
      if (this.state.trangValue == this.state.vangValue) {
        Tts.speak(this.state.trangValue + "Đều");
      }
      else {
        Tts.speak(this.state.trangValue + "");
        Tts.speak(this.state.vangValue + "");
      }
      if (this.state.trangValue == this.state.winValue) {
        Tts.speak("Chiến thắng");
      }
    });
  }
  _onPressVang = () => {
    if (this.state.vangValue < this.state.winValue) {
      this.setState({
        vangValue: this.state.vangValue + 1,
      })
    };
    Tts.stop();
    Tts.getInitStatus().then(() => {
      if (this.state.trangValue == this.state.vangValue) {
        Tts.speak(this.state.vangValue + "Đều");
      }
      else {
        Tts.speak(this.state.vangValue + "");
        Tts.speak(this.state.trangValue + "");
      }
      if (this.state.trangValue == this.state.winValue) {
        Tts.speak("Chiến thắng");
      }
    });
  }
  _onTruVang = () => {
    if (this.state.vangValue < this.state.winValue) {
      this.setState({
        vangValue: this.state.vangValue - 1,
      })
    };
    Tts.stop();
    Tts.getInitStatus().then(() => {
      if (this.state.trangValue == this.state.vangValue) {
        Tts.speak(this.state.vangValue + "Đều");
      }
      else {
        Tts.speak(this.state.vangValue + "");
        Tts.speak(this.state.trangValue + "");
      }
      if (this.state.trangValue == this.state.winValue) {
        Tts.speak("Chiến thắng");
      }
    });
  }
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <TouchableOpacity
          style={{ width: "50%", height: "100%", backgroundColor: 'white', justifyContent: "center", alignItems: 'center' }}
          onPress={() => this._onPressTrang()}
        >
          <Text style={{ fontSize: 200 }}>
            {this.state.trangValue}
          </Text>
          <View
            style={{ position: "relative", width: 30, height: 30, backgroundColor: 'gray', borderRadius: 2, justifyContent: "center", alignItems: 'center' }}>
            <Text onPress={() => this._onTruTrang()}
              style={{ relative: "top", width: 40, height: 40, textAlign: "center", textAlignVertical: "center", fontSize: 26, color: "white" }}>-1
              </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ relative: "bottom", width: "50%", height: "100%", backgroundColor: 'yellow', justifyContent: "center", alignItems: 'center' }}
          onPress={() => this._onPressVang()}
        >
          <Text style={{ fontSize: 200 }}>
            {this.state.vangValue}
          </Text>
          <View
            style={{ position: "relative", width: 30, height: 30, backgroundColor: 'gray', borderRadius: 2, justifyContent: "center", alignItems: 'center' }}>
            <Text onPress={() => this._onTruVang()}
              style={{ relative: "top", width: 40, height: 40, textAlign: "center", textAlignVertical: "center", fontSize: 26, color: "white" }}>-1
              </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}