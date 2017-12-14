import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  totalItemCountSelector,
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../config/selectors';
import CartPay from './CartPay'
import { RemoveCart, RemoveSingleItemCart, transactionOrder } from '../actions';

class CartPayContainer extends Component {

  render() {

    return (
      <CartPay
        products={this.props.products}
        removeCart={this.props.RemoveCart}
        removeSingleExistingItem={this.props.RemoveSingleItemCart}
        deliveryEnabled={this.props.deliveryEnabled}
        collectionEnabled={this.props.collectionEnabled}
        totalPrice={this.props.totalPrice}
        transactionAndOrderTable={this.props.transactionOrder}
      />
    );
  }
}

const mapStateToProps = state => ({

  products: state.products.products,
  totalPrice: totalPriceSelector(state),
  deliveryEnabled: deliverySelector(state),
  collectionEnabled: collectionSelector(state),
});

export default connect(mapStateToProps, {
  RemoveCart,
  RemoveSingleItemCart,
  transactionOrder
})(CartPayContainer);
