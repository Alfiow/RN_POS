import React, { Component } from 'react'
import { View, Image, Text, StatusBar, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { FloatingLabelInput } from './common'
import { textChanged, loginUser } from '../actions'
import { Spinner } from './common'

class Login extends Component {
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }
  
  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button
        buttonStyle={styles.buttonStyle}
        backgroundColor='transparent'
        borderRadius={20}
        title='Masuk'
        fontFamily='Avenir'
        fontSize={16}
        onPress={this.onButtonPress.bind(this)}
      />
    )
  }

  render() {
    const { LinearGradientStyle, textStyle, errorTextStyle, buttonStyle } = styles;
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
        colors={['#b4b4b4', '#7d7b7a', '#535251']}
        style={LinearGradientStyle}
      >
        
        <StatusBar 
          barStyle='light-content'
        />

        <View style={{ position: 'absolute', top: 25, left: 8, justifyContent: 'center', alignItems: 'flex-start', width: 30, height: 30, zIndex: 10 }}>
          <Icon
            type="simple-line-icon"
            name="arrow-left"
            color="white"
            size={24}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        
        <Image source={require('../images/if_Rounded-31_2024644.png')} style={{ width: 80, height: 80 }} />
        
        <Text style={textStyle}>
              
        </Text>

        <View>
          <FloatingLabelInput 
            autoCapitalize={'none'}
            label='Email'
            value={this.props.email}
            onChangeText={text => this.props.textChanged ({ prop: 'email', text })}
          />

          <FloatingLabelInput
            autoCapitalize={'none'}
            secureTextEntry
            label='Kata Sandi'
            value={this.props.password}
            onChangeText={text => this.props.textChanged({ prop: 'password', text })}
          />

          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>
        </View>

        <View style={{ margin:7 }}>
          {this.renderLoginButton()}
        </View>
      </LinearGradient>
    )
  }
}

const styles = {
  LinearGradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25,
    margin: 10,
    color: 'white',
    fontFamily: 'avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  errorTextStyle: {
    alignSelf: 'center',
    margin: 2,
    color: 'white',
    fontSize: 13,
    fontFamily: 'Avenir'
  },
  buttonStyle: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, { textChanged, loginUser })(Login)