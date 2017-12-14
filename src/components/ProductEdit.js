import _ from 'lodash'
import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, View, FlatList } from 'react-native'
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'
import { connect } from 'react-redux'
import { productUpdate, productSave } from '../actions'
import ProductForm from './ProductForm'
import { width } from '../config/constants'

class ProductEdit extends Component {
  componentWillMount() {
    _.each(this.props.rowProduct, (value, prop) => {
      this.props.productUpdate({ prop, value })
    })
    console.log(this.props.rowProduct)
  }

  onButtonPress() {
    const { product, price } = this.props;

    this.props.productSave({ product, price, uid: this.props.rowProduct.uid })
  }
  render() {
    return (
      <View>
        <ProductForm />
        <Button
          buttonStyle={styles.buttonStyle}
          backgroundColor='#4BC0C8'
          title='Simpan'
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
  const { product, price } = state.productForm

  return { product, price }
  // return {
  //   product: productForm.product,
  //   price: productForm.price
  // }
}

export default connect(mapStateToProps, { productUpdate, productSave })(ProductEdit)