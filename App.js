import React, { Component } from 'react'
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount = () => {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['0deg', '180deg', '0deg']
    })
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.appText}>Animations in React Native using Animated API</Text>
        </View>
        <View style={styles.mainView}>
          <Animated.Image style={{
            width: 227,
            height: 200,
            transform: [{ rotate: spin }]
          }} source={require('./assets/team.png')}></Animated.Image>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    height: '9%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appText: {
    color: 'snow',
    fontSize: 16,
    fontWeight: 'bold'
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})