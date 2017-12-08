import React, { Component } from 'react'
import { View, Text, Container, Content, SwipeRow, Icon, Button, Card } from 'native-base';
import { Actions } from 'react-native-router-flux'

import style from './CartStyles'

class ListItem extends Component {

  render() {
    const { product, price } = this.props.produk

    return(
      <View style={{ borderBottomWidth: 0.2 }}>
        <Content scrollEnabled={false}>
          <SwipeRow
            disableRightSwipe
            rightOpenValue={-100}
            body={
              <View style={style.CartItem}>
                <Text style={{ paddingLeft: 10, flex: 0.5 }}>
                  {product}
                </Text>

                <Text style={{ flex: 0.2 }}>
                  {price}
                </Text>
              </View>
            }
            right={
              <View style={style.CartItem}>
              <Button success onPress={() => alert('Add')}>
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
    )
  }
}

export default ListItem