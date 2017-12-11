import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, FlatList } from 'react-native'
import { productFetch, AddCart, UpdateExistingItemQuantityCart } from '../actions'
import ListItem from './ListItem'
import {
  totalItemCountSelector,
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../config/selectors';

class ProductList extends Component {

  componentWillMount() {
    this.props.productFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(products)
  }
  
  render() {
    // console.log(this.props.products)
    return (
      <ListItem
        productList={this.dataSource}
        addToCart={this.props.addToCart}
        incrementExistingItemQuantity={this.props.incrementExistingItemQuantity}
        products={this.props.products}
      />
    );
  }
}

const mapStateToProps = state => {
  return { 
    products : state.products.products,
    totalPrice: totalPriceSelector(state),
    totalProducts: totalItemCountSelector(state),
    deliveryEnabled: deliverySelector(state),
    collectionEnabled: collectionSelector(state), 
  }
};

export default connect(mapStateToProps, { 
  productFetch,
  addToCart: AddCart,
  incrementExistingItemQuantity: UpdateExistingItemQuantityCart  
})(ProductList);