import React, { Component } from 'react'
import { ListView } from 'react-native'
import { View, Text, Container, Content, SwipeRow, Icon, Button, Card } from 'native-base';
import { Actions } from 'react-native-router-flux'

import style from './CartStyles'

class ListItem extends Component {

  addRequested = product => {
    // Check if products array contain the same product
    let productExists = false;
    let productIndex = -1;
    this.props.products.forEach((p, idx) => {
      if (product.uid === p.uid) {
        productExists = true;
        productIndex = idx;
        console.log(product.uid)
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
          <View style={{ borderBottomWidth: 0.2 }}>
            <Content scrollEnabled={false}>
              <SwipeRow
                disableRightSwipe
                rightOpenValue={-100}
                body={
                  <View style={style.CartItem}>
                    <Text style={{ paddingLeft: 10, flex: 0.5 }}>
                      {rowData.product}
                    </Text>

                    <Text style={{ flex: 0.2 }}>
                      {rowData.price}
                    </Text>
                  </View>
                }
                right={
                  <View style={style.CartItem}>
                    <Button success onPress={() => this.addRequested(rowData)}>
                      <Icon active name="add" />
                    </Button>

                    <Button danger onPress={() => alert('Trash')}>
                      <Icon active name="trash" />
                    </Button>
                  </View>
                }
              />
            </Content>
          </View>
        )}
      />
     
    )
  }
}

export default ListItem