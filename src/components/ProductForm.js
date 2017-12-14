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
        <FormLabel labelStyle={styles.labelStyle}>Nama Produk</FormLabel>
        <FormInput
          placeholder='masukkan produk'
          placeholderTextColor={'grey'}
          value={this.props.product} 
          onChangeText={value => this.props.productUpdate({ prop: 'product', value })} 
        />
        <FormLabel labelStyle={styles.labelStyle}>Harga</FormLabel>
        <FormInput
          placeholder='tentukan harga'
          placeholderTextColor={'grey'}
          value={this.props.price.toString()} 
          onChangeText={value => this.props.productUpdate({ prop: 'price', value })} 
          keyboardType='numeric'  
        />
      </View>
    )
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
  }
}

const mapStateToProps = (state) => {
  const { product, price } = state.productForm

  return { product, price }
}

export default connect(mapStateToProps, { productUpdate, productAdd }) (ProductForm)