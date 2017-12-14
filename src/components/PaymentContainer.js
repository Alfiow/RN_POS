import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../config/selectors';
import Payment from './Payment'
import {  } from '../actions';

class PaymentContainer extends Component {

  render() {

    return (
      <Payment
        products={this.props.products}
        deliveryEnabled={this.props.deliveryEnabled}
        collectionEnabled={this.props.collectionEnabled}
        totalPrice={this.props.totalPrice}
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

export default connect(mapStateToProps, {undefined

})(PaymentContainer)
