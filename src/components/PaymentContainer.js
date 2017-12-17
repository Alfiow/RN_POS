import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../config/selectors';
import Payment from './Payment'
import { transactionOrder, paymentUpdate } from '../actions';

class PaymentContainer extends Component {

  render() {

    return (
      <Payment
        products={this.props.products}
        deliveryEnabled={this.props.deliveryEnabled}
        collectionEnabled={this.props.collectionEnabled}
        totalPrice={this.props.totalPrice.toString()}
        transactionAndOrderTable={this.props.transactionOrder}
        paymentUpdate={this.props.paymentUpdate}
        payment={this.props.payment}        
      />
    );
  }
}

const mapStateToProps = state => ({
  payment: state.payment,
  products: state.products.products,
  totalPrice: totalPriceSelector(state),
  deliveryEnabled: deliverySelector(state),
  collectionEnabled: collectionSelector(state),
});

export default connect(mapStateToProps, {
  transactionOrder,
  paymentUpdate
})(PaymentContainer)
