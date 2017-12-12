import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, View, FlatList } from 'react-native'
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'
import { connect } from 'react-redux'
import { customerAdd } from '../actions'
import CustomerForm from './CustomerForm'
import { width } from '../config/constants'

class CustomerAdd extends Component {
  onButtonPress() {
    const { nama, email, phone } = this.props;

    this.props.customerAdd({ nama, email, phone })
  }

  render() {
    return (
      <View>
        <CustomerForm {...this.props} />
        <Button
          buttonStyle={styles.buttonStyle}
          backgroundColor='#4BC0C8'
          title='Tambah'
          fontFamily='Avenir'
          fontSize={16}
          onPress={this.onButtonPress.bind(this)}
        />
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

export default connect(mapStateToProps, { customerAdd })(CustomerAdd)