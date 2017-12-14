import React, { Component } from 'react'
import { ListView, View, Text, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import { Footer } from './common'
import style from './CartStyles'

const EmptyCart = () => (
  <View style={style.emptyCart}>
    <Text>Input produk dahulu</Text>
  </View>
)

class ListItem extends Component {

  addRequested = product => {
    // Check if products array contain the same product
    let productExists = false;
    let productIndex = -1;
    this.props.products.forEach((p, idx) => {
      if (product.uid === p.uid) {
        productExists = true;
        productIndex = idx;
        // console.log(product.uid)
      }
    })

    if (productExists) {
      this.props.incrementExistingItemQuantity(productIndex, product, (product.quantity += 1));
    } else {
      this.props.addToCart(product);
    }
  }

  removeItem = (product) => {
    let index = this.props.products.indexOf(product);
    if (product.quantity > -1) {
      this.props.removeSingleExistingItem(
        index,
        product,
        (product.quantity -= 1)
      );
    } else {
      this.props.removeCart(index, product);
    }
  }

  displayList() {
    return (
      <ListView
        style={style.CartProductContainer}
        enableEmptySections
        dataSource={this.props.productList}
        renderRow={rowData => (
          <View style={{ borderBottomWidth: 0.5, borderBottomColor: "black" }}>
            <View style={style.CartItem}>

              <Text style={{ flex: 0.8, padding: 10 }}>
                {rowData.product}
              </Text>

              <Text style={{ flex: 0.4 }}>
                {rowData.quantity}
              </Text>

              <Text style={{ flex: 0.2 }}>
                {rowData.price}
              </Text>

              <TouchableOpacity style={{ flex: 0.2 }} onPress={() => this.addRequested(rowData)}>
                <Icon name='add-circle' type='action' color='#66cccc' />
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 0.2 }} onPress={() => this.removeItem(rowData)}>
                <Icon name="remove-circle" type='action' color="#66cccc"  />
              </TouchableOpacity>

            </View>
          </View>
        )}
      />
    )
  }

  render() {
    //le.log(this.props.incrementExistingItemQuantity)
    return (
      <View style={style.CartContainer}>
        <View style={{ flex: 3, padding: 10 }}>
          {this.props.products.length > 0 ? this.displayList() : <EmptyCart />}
        </View>

        <View style={styles.footerStyle}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{this.props.totalItemsInCart} Barang</Text>
          </View>

          <View style={styles.viewStyle}>
            <TouchableOpacity onPress={() => Actions.cart()}>
              <Icon name="shopping-cart" type='action' color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => Actions.payment() }>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Bayar</Text>
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
    justifyContent: 'space-between',
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

export default ListItem