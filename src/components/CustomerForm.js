import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, View, FlatList } from 'react-native'
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'
import { connect } from 'react-redux'
import { customerUpdate } from '../actions'
import { width } from '../config/constants'

class CustomerForm extends Component {

  render() {
    return (
      <View>
        <FormLabel>Nama</FormLabel>
        <FormInput onChangeText={value => this.props.customerUpdate({ prop: 'nama', value })} />
        <FormLabel>email</FormLabel>
        <FormInput onChangeText={value => this.props.customerUpdate({ prop: 'email', value })}/>
        <FormLabel>Phone</FormLabel>
        <FormInput onChangeText={value => this.props.customerUpdate({ prop: 'phone', value })} />
      </View>
    )
  }
}

const styles = {
  buttonStyle: {
    margin: 30,
    paddingTop: 10,
    width: width,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
  }
}

const mapStateToProps = (state) => {
  const { nama, email, phone } = state.customerForm

  return { nama, email, phone }
}

export default connect(mapStateToProps, { customerUpdate })(CustomerForm)