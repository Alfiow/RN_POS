import React, { Component } from 'react'
import { ListView, View, Text, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import style from './CartStyles'
import styles from './PizzaStyle'

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

  render() {

    return(
      <ListView
        enableEmptySections
        dataSource={this.props.productList}
        renderRow={rowData => (
          <View style={styles.ItemBaseContainer}>
            <View style={style.CartItem}>
              <Text style={styles.PizzaName}>
                {rowData.product}
              </Text>

              <Text style={{ flex: 0.2 }}>
                {rowData.price}
              </Text>
            </View>

            <View style={styles.PizzaAddButtonContainer}>
              <TouchableOpacity
                style={styles.PizzaAddButton}
                onPress={() => this.addRequested(rowData)}
              >
                <Icon name='add-shopping-cart' type='action' color='#66cccc' />
              </TouchableOpacity>

            </View>
          </View>
        )}
      />
     
    )
  }
}

export default ListItem