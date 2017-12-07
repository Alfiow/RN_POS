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
import ProductForm from './ProductForm'

class ProductAdd extends Component {
  onButtonPress() {
    const { product, price } = this.props;

    this.props.productAdd({ product, price, })
  }
  render() {
    return (
      <View>
        <ProductForm {...this.props}/>
        <Button
          buttonStyle={styles.buttonStyle}
          icon={{ name: 'user', type: 'simple-line-icon' }}
          backgroundColor='transparent'
          borderRadius={20}
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

export default connect(mapStateToProps, { productUpdate, productAdd })(ProductAdd)