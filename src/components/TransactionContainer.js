import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, FlatList } from 'react-native'
import Transaction from './Transaction'
import {
  totalItemCountSelector,
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../config/selectors'
import { transactionFetch } from '../actions'

class TransactionContainer extends Component {

  componentWillMount() {
    //this.props.transactionFetch({ uid: this.props.uid })
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ transactions }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(transactions)
  }

  render() {
    //console.log(this.props.transactions)
    return (
      <Transaction
        products={this.props.products}
        transactionList={this.dataSource}
        totalPrice={this.props.totalPrice}
        collectionEnabled={this.props.collectionEnabled}
        totalItemsInCart={this.props.totalProducts}
        transactions={this.props.transactions}
      />
    );
  }
}

const mapStateToProps = state => {
  const transactions = _.map(state.transactions.transactions, (val, uid) => {
    return { ...val, uid };
  })
  return {
    transactions: transactions,
    transaction: state.transactions.transactions,
    products: state.products.products,
    totalPrice: totalPriceSelector(state),
    totalProducts: totalItemCountSelector(state),
    deliveryEnabled: deliverySelector(state),
    collectionEnabled: collectionSelector(state),
  }
};

export default connect(mapStateToProps, {
  transactionFetch,
})(TransactionContainer)