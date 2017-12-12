import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, View, FlatList } from 'react-native'
import { 
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'
import { connect } from 'react-redux'
import { productUpdate, productAdd } from '../actions'
import { width } from '../config/constants'

class ProductForm extends Component {

  render() {
    return (
      <View>
        <FormLabel>Nama Produk</FormLabel>
        <FormInput onChangeText={value => this.props.productUpdate({ prop: 'product', value })} />
        <FormLabel>Harga</FormLabel>
        <FormInput 
          onChangeText={value => this.props.productUpdate({ prop: 'price', value })} 
          keyboardType='numeric'  
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { product, price } = state.productForm

  return { product, price }
}

export default connect(mapStateToProps, { productUpdate, productAdd }) (ProductForm)