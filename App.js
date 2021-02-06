import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'react-native';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('vn-VI');
export default class Welcome extends Component {
  state = {
    trangValue: 0,
    vangValue: 0,
    winValue: 12,
    gio: "00",
    phut: "00",
    giay: "00",
    nameA: "Đội A",
    nameB: "Đội B"
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
        Tts.speak(this.state.trangValue + " " + this.state.vangValue);
      }
      if (this.state.trangValue == this.state.winValue) {
        Tts.speak(this.state.nameA+" thắng");
      }
    });
  }
  _onTruTrang = () => {
    if (this.state.trangValue <= this.state.winValue & this.state.trangValue > 0) {
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
        Tts.speak(this.state.trangValue + " " + this.state.vangValue);
      }
      if (this.state.trangValue == this.state.winValue) {
        Tts.speak(this.state.nameA+" thắng");
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
        Tts.speak(this.state.vangValue + " " + this.state.trangValue);
      }
      if (this.state.vangValue == this.state.winValue) {
        Tts.speak(this.state.nameB+" thắng");
      }
    });
  }
  _onTruVang = () => {
    if (this.state.vangValue <= this.state.winValue & this.state.vangValue > 0) {
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
        Tts.speak(this.state.vangValue + " " + this.state.trangValue);
      }
      if (this.state.vangValue == this.state.winValue) {
        Tts.speak(this.state.nameB+" thắng");
      }
    });
  }
  _setGiay = () => {
    if (this.state.giay < 59) {
      this.setState({
        giay: this.state.giay + 1,
      })
    } else {
      this.setState({
        giay: 0,
      })
    }
  };
  componentDidMount() {
    StatusBar.setHidden(true);
    // Tts.stop();
    // Tts.getInitStatus().then(() => {
    //     Tts.speak("Xin chào! Hãy điền thông tin để bắt đầu ván đấu!");
    // });
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View
          style={{ width: "50%", height: "100%", backgroundColor: '#34A853', justifyContent: "center", alignItems: 'center' }}
          onStartShouldSetResponderCapture={() => this._onPressTrang()}
        >
          <View
            style={{ position: "absolute", top: 0, left: 0, width: "60%", height: 50, backgroundColor: '#4285F4', borderRadius: 2, justifyContent: "center", alignItems: 'center', borderBottomEndRadius: 50}}>
            <Text
              style={{ height: 40, textAlign: "center", textAlignVertical: "center", fontSize: 26, color: "white" }}>{this.state.nameA}
            </Text>
          </View>
          <Text style={{ fontSize: 200, color: "white" }}>
            {this.state.trangValue}
          </Text>
        </View>
        <View
          style={{ width: "50%", height: "100%", backgroundColor: '#FBBC05', justifyContent: "center", alignItems: 'center' }}
          onStartShouldSetResponderCapture={() => this._onPressVang()}
        >
          <View
            style={{ position: "absolute", top: 0, right: 0, width: "60%", height: 50, backgroundColor: '#4285F4', borderRadius: 2, justifyContent: "center", alignItems: 'center', borderBottomStartRadius: 50 }}>
            <Text
              style={{ height: 40, textAlign: "center", textAlignVertical: "center", fontSize: 26, color: "white" }}>{this.state.nameB}
            </Text>
          </View>
          <Text style={{ fontSize: 200, color: "white" }}>
            {this.state.vangValue}
          </Text>
          
        </View>
        <View style={{ position: "absolute", top: 0, width: "20%", justifyContent: "center", alignItems: 'center', height: 80, backgroundColor: '#EA4335', borderRadius: 2, justifyContent: "center", alignItems: 'center', borderBottomEndRadius: 300, borderBottomStartRadius: 300 }}>
          <Text
            style={{ position:"absolute", top:0, textAlign: "center", textAlignVertical: "center", fontSize: 50, color: "white" }}
          >{this.state.winValue}</Text>
        </View>
        <View style={{ position: "absolute", bottom: 0, width: "25%", justifyContent: "center", alignItems: 'center', height: 50, backgroundColor: '#EA4335', borderRadius: 6, justifyContent: "center", alignItems: 'center'}}>
          <Text
            style={{ position:"absolute", bottom:0, textAlign: "center", textAlignVertical: "center", fontSize: 40, color: "white" }}
          >{this.state.gio}:{this.state.phut}:{this.state.giay}</Text>
        </View>

        <View
            style={{ position: "absolute", bottom: 0, left: 0, width: 60, height: 60, backgroundColor: '#BBBBBB', borderRadius: 2, justifyContent: "center", alignItems: 'center', borderTopEndRadius: 50 }}>
            <Text onPress={() => this._onTruTrang()}
              style={{ width: 40, height: 40, textAlign: "center", textAlignVertical: "center", fontSize: 26, color: "white" }}>-1
              </Text>
          </View>
        <View
            style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, backgroundColor: '#BBBBBB', borderRadius: 2, justifyContent: "center", alignItems: 'center', borderTopStartRadius: 50 }}>
            <Text onPress={() => this._onTruVang()}
              style={{ width: 40, height: 40, textAlign: "center", textAlignVertical: "center", fontSize: 26, color: "white" }}>-1
              </Text>
          </View>
      </View>
    );
  }
}