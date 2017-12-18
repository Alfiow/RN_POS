import React, { Component } from 'react'
import { View, Image, Text, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { width } from './config/constants'

class Launch extends Component {
  onButtonPress() {
    Actions.login()
  }

  onSignUpButtonPress() {
    Actions.signup()
  }

  render() {
    const { LinearGradientStyle, textStyle, 
      buttonStyle } = styles;
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
        colors={['#485563', '#485563']}
        style={LinearGradientStyle}
      >
        <View style={{ flex: .40, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
          <Image source={require('./images/if_social_store_house_710261.png')} style={{ width: 120, height: 100 }} />

          <Text style={textStyle}>
            POS
          </Text>
        </View>

        <View style={{ flex: .60 }}>
          <Text style={{ backgroundColor: 'transparent', color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'center', alignItems: 'center', marginTop: 15, marginBottom: 7 }}>
            Sudah punya akun ?
          </Text>

          <Button
            buttonStyle={styles.buttonStyle}
            backgroundColor='#4BC0C8'
            title='Masuk'
            fontFamily='Avenir'
            fontSize={14}
            borderRadius={100}
            onPress={this.onButtonPress.bind(this)}
          />

          <Text style={{ backgroundColor: 'transparent', color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'center', alignItems: 'center', marginTop: 15, marginBottom: 7 }}>
            atau
          </Text>

          <Button
            buttonStyle={buttonStyle}
            backgroundColor='#a73737'
            title='Daftar'
            color='white'
            fontFamily='Avenir'
            fontSize={14}
            borderRadius={100}
            onPress={this.onSignUpButtonPress.bind(this)}
          />
        </View>
      </LinearGradient>
    )
  }
}

const styles = {
  LinearGradientStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  buttonStyle: {
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
  }
}

export default Launch