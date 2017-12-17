import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, FlatList, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Report from './Report'
import { reportFetch } from '../actions'

class ReportContainer extends Component {
  state = {
    transactions: [],
    text: ''
  }
  componentWillMount() {
    this.props.reportFetch()
    this.setState({
      transactions: this.props.transactions
    })
    this.createDataSource(this.state)
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

  handleChangeSearch(text) {
    this.setState({
      text: text
    })
  }

  render() {
    console.log(this.props.transactions)
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <View style={{ flex: .10 }}>
          <SearchBar
            lightTheme
            onChangeText={this.handleChangeSearch.bind(this)}
            // onClearText={someMethod}
            placeholder='Type Here...' />
        </View>

        <View style={{ flex: .90 }}>
          <Report
            transactionList={this.dataSource}
            searchText={this.state.text}
          />
        </View>
      </View>
      
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