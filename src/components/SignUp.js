/* eslint-disable */
import firebase from 'firebase'
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StatusBar } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import * as ActionsFunctions from '../actions';
import { FloatingLabelInput } from './common/FloatingLabelInput';

class SignUp extends React.Component {
  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onSignUpButtonPress() {
    const { email, password, name } = this.props;
    this.props.signUpUser({ email, password, name });
  }

  render() {
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
        colors={['#b4b4b4', '#7d7b7a', '#535251']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StatusBar
          barStyle='light-content'
        />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontSize: 20,
            marginTop: 30,
            backgroundColor: 'transparent',
            color: 'white',
            fontFamily: 'Avenir',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Buat Akun
        </Text>
        
          <View style={{ margin: 30 }}>
            <View style={{ margin: 7 }}>
              <FloatingLabelInput
                label="Nama Toko"
                value={this.props.name}
                onChangeText={this.onNameChange.bind(this)}
              />
              
              <FloatingLabelInput
                autoCapitalize={'none'}
                label="Email"
                value={this.props.email}
                onChangeText={text => this.props.textChanged({ prop: 'email', text })}
              />
              
              <FloatingLabelInput
                autoCapitalize={'none'}
                secureTextEntry
                label="Kata Sandi"
                value={this.props.password}
                onChangeText={text => this.props.textChanged({ prop: 'password', text })}
              />
              
              <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text>
              
              <Button
                buttonStyle={{ marginTop: 20, width: 250, height: 40, borderWidth: 1, borderColor: 'white', alignSelf: 'center' }}
                backgroundColor="white"
                borderRadius={20}
                title="Daftar"
                color="#fe161d"
                fontFamily="Avenir"
                fontWeight="bold"
                fontSize={16}
                onPress={this.onSignUpButtonPress.bind(this)}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    margin: 2,
    color: 'white',
    fontSize: 13,
    fontFamily: 'Avenir',
  },
};

const mapStateToProps = ({ auth }) => { // auth = state.auth
  const { email, password, error, loading, name } = auth;
  return { email, password, error, loading, name };
};

export default connect(mapStateToProps, {
  ...ActionsFunctions
})(SignUp);
