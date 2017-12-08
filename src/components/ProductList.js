import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, FlatList } from 'react-native'
import { productFetch } from '../actions'
import ListItem from './ListItem'

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

  // renderRow(produk) {
  //   return ( 
  //     <ListItem 
  //       produk={produk} 
  //     />
  //   )
  // }
  
  render() {
    //console.log(this.props);
    return (
      <ListItem
        productList={this.dataSource}
        products={this.props.products}
      />
    );
  }
}

const mapStateToProps = state => {
  const products = _.map(state.products, (val, uid) => {
    return { ...val, uid };
  });

  return { products };
};

export default connect(mapStateToProps, { productFetch })(ProductList);