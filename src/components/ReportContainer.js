import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, FlatList } from 'react-native'
import Report from './Report'
import { reportFetch } from '../actions'

class ReportContainer extends Component {

  componentWillMount() {
    this.props.reportFetch()
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
    console.log(this.props.transactions)
    return (
      <Report
        transactionList={this.dataSource}
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
  }
}

export default connect(mapStateToProps, {
  reportFetch,
})(ReportContainer)