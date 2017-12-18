import React, { Component } from 'react'
import { ListView, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';

import style from './CartStyles'

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
          <Content style={{ flex: 1 }}>
            <Content style={{ flex: 1 }}>
              { product.quantity > 0 ?
              <ListItem style={{ flex: 1 }}>
                <Text style={{ flex: .3 }}>
                  {product.product}
                </Text>
                
                <Text style={{ flex: .1 }}>
                  {product.quantity}@
                </Text>

                <Text style={{ flex: .3 }}>
                  Rp. {product.price}
                </Text>

                <Text style={{ flex: .3 }}>
                  Rp. {(product.quantity * product.price)}
                </Text>
              </ListItem>
              : null
              }
            </Content>
          </Content>
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
          <Content style={{ flex: 1 }}>
            <ListItem style={{ flex: 1 }}>
              <Text style={{ flex: .7 }}>
                Kode Transaksi
              </Text>

              <Text style={{ flex: .3 }}>
                {rowData.uid.substr(1, 6)}
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ flex: .7 }}>
                Date
              </Text>

              <Text style={{ flex: .3 }}>
                {moment(rowData.createdAt).format('YYYY-MM-DD  HH:mm:ss')}
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ flex: .7 }}>
                Nama
              </Text>

              <Text style={{ flex: .3 }}>
                {rowData.name}
              </Text>
            </ListItem>
            
            <ListItem style={{ flex: 1 }}>
              <Text style={{ flex: .7 }}>
                Total Items
              </Text>
              <Text style={{ flex: .3 }}>
                {this.props.totalItemsInCart}
              </Text>
            </ListItem>

            <ListItem style={{ flex: 1 }}>
              <Text style={{ flex: .7 }}>
                Total
              </Text>
              <Text style={{ flex: .3 }}>
                {rowData.total}
              </Text>
            </ListItem>
              
            <ListItem style={{ flex: 1 }}>
              <Text style={{ flex: .7 }}>
                Jumlah Bayar
              </Text>
              <Text style={{ flex: .3 }}>
                {rowData.bayar}
              </Text>
            </ListItem>

            <ListItem style={{ flex: 1 }}>
              <Text style={{ flex: .7 }}>
                Jumlah Kembalian
              </Text>
              <Text style={{ flex: .3 }}>
                {(rowData.bayar - rowData.total)}
              </Text>
            </ListItem>
          </Content>
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
        
        <View style={{ flex: .70, padding: 10 }}>
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

