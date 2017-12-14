import React, { Component } from 'react'
import { TTouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { productUpdate, productSave } from '../actions'

class ProductEdit extends Component {
  onButtonPress() {
    const { product, price } = this.props;

    this.props.productSave({ product, price, uid: this.props.rowProduct.uid })
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{ padding: 10 }}>
        <Icon name="arrow-back" type="navigation" color="white" />
      </TouchableOpacity>
    )
  }
}

export default connect(mapStateToProps, { productUpdate, productSave })(ProductEdit)