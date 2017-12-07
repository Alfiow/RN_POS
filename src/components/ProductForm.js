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

const styles = {
  buttonStyle: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
  }
}

const mapStateToProps = (state) => {
  const { product, price } = state.productForm

  return { product, price }
  // return {
  //   product: productForm.product,
  //   price: productForm.price
  // }
}

export default connect(mapStateToProps, { productUpdate, productAdd }) (ProductForm)