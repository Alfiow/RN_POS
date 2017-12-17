import React, { Component } from 'react'
import { ListView, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import { CardSection } from './common'
import { width } from '../config/constants'
import style from './CartStyles'

const EmptyCart = () => (
  <View style={style.emptyCart}>
    <Text>{`Refresh\n    atau\nInput produk`}</Text>
  </View>
)

class Transaction extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      productsList: this.ds.cloneWithRows(this.props.products)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      productsList: this.ds.cloneWithRows(nextProps.products)
    });
  }

  displayCart() {
    //console.log(this.props.products)
    return (
      <ListView
        style={style.CartProductContainer}
        dataSource={this.state.productsList}
        renderRow={(product, rowID) => (
          <View style={{ borderBottomWidth: 0.2 }}>
            <View style={{ borderBottomWidth: 0.2 }}>
              { product.quantity > 0 ?
              <View style={style.CartItem} key={rowID}>
                <Text style={{ padding: 5, flex: 0.4 }}>
                  {product.product}
                </Text>
                
                <Text style={{ flex: 0.1 }}>
                  {product.quantity}@
                </Text>

                <Text style={{ flex: 1 }}>
                  Rp. {product.price}
                </Text>

                <Text style={{ fontSize: 18 }}>
                  Rp. {(product.quantity * product.price)}
                </Text>
              </View>
              : null
              }
            </View>
          </View>
        )}
      />
    );
  }

  displayTransaction() {
    return (
      <ListView
        style={style.CartProductContainer}
        enableEmptySections
        dataSource={this.props.transactionList}
        renderRow={rowData => (
          <View style={{ flex: 1, width: width }}>
            <CardSection>
              <Text style={{ flex: 0.3, padding: 2 }}>
                Kode Transaksi
              </Text>

              <Text style={{ flex: 1, padding: 2 }}>
                {rowData.uid.substr(-6)}
              </Text>
            </CardSection>

            <CardSection>
              <Text style={{ flex: 0.3, padding: 2 }}>
                Date
              </Text>

              <Text style={{ flex: 1, padding: 2 }}>
                {moment(rowData.createdAt).format('YYYY-MM-DD  HH:mm:ss')}
              </Text>
            </CardSection>

            <CardSection>
              <Text style={{ flex: 0.3, padding: 2 }}>
                Nama
              </Text>

              <Text style={{ flex: 1, padding: 2 }}>
                {rowData.name}
              </Text>
            </CardSection>
            
            <View style={style.cartSummaryContainer}>
              <View style={style.accumulatorContainer}>
                <Text style={style.totalItems}>
                  Total Items {this.props.totalItemsInCart}
                </Text>
                
                <Text style={style.totalPrice}>
                  Total Rp. {rowData.total}
                </Text>

                <Text style={style.totalPrice}>
                  Jumlah Bayar Rp.{rowData.bayar} 
                </Text>

                <Text style={style.totalPrice}>
                  Jumlah Kembalian Rp. {(rowData.bayar - rowData.total)}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    )
  }

  render() {
    console.log(this.props.transactions)
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <View style={{ flex: .30, padding: 10 }}>
          {this.displayCart()}
        </View>
        
        <View style={{ flex: .60, padding: 10 }}>
          {this.displayTransaction()}
        </View>

        <View style={styles.footerStyle}>
          <TouchableOpacity onPress={() => Actions.list()}>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Transaksi Baru</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66cccc',
    flex: .10
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Avenir'

  }
}

export default Transaction

