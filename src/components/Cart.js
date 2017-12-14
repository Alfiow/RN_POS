import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, View, ListView, TouchableOpacity } from "react-native";
import { Button, FormLabel, FormInput, Icon } from "react-native-elements";
import { width } from "../config/constants";
import { Actions } from 'react-native-router-flux'

import style from "./CartStyles";

const EmptyCart = () => (
  <View style={style.emptyCart}>
    <Text>Please add items in order to proceed!</Text>
  </View>
)

export default class Cart extends Component {
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

  removeItem = (product) => {
    let index = this.props.products.indexOf(product);
    if (product.quantity > 1) {
      this.props.removeSingleExistingItem(
        index,
        product,
        (product.quantity -= 1)
      );
    } else {
      this.props.removeCart(index, product);
    }
  }

  displayCart() {
    return (
      <ListView
        style={style.CartProductContainer}
        dataSource={this.state.productsList}
        renderRow={(product, rowID) => (
          <View style={{ borderBottomWidth: 0.2 }}>
            <View style={style.CartItem} key={rowID}>
              <Text style={{ padding: 10, flex: 0.5 }}>
                {product.product.toString()}
              </Text>
              <Text style={{ flex: 0.1 }}>{product.quantity}</Text>
              <Text style={{ flex: 0.2 }}>
                Rp.{(product.quantity * product.price)}
              </Text>
              <TouchableOpacity
                style={{ flex: 0.2 }}
                onPress={() => {
                  this.removeItem(product);
                }}
              >
                <Icon size={15} reverse color="#66cccc" name="close" />
              </TouchableOpacity>
            </View>

          </View>
        )}
      />
    );
  }

  onButtonPress() {
    let products = this.props.products
    this.props.transactionAndOrderTable(products)
  }

  render() {
    const enabled = this.props.collectionEnabled
    return (
      <View style={style.CartContainer}>
        { enabled ?
        <View style={style.CartContainer}>
          <View style={{ flex: 3, padding: 10 }}>
            {enabled ? this.displayCart() : <EmptyCart />}
          </View>

          <View style={styles.totalStyle}>
            <Text style={styles.textStyle}>Total</Text>
            <Text style={styles.textStyle}>Rp.{this.props.totalPrice}</Text>
          </View>

          <View style={styles.footerStyle}>
            <TouchableOpacity onPress={() => Actions.payment()}>
              <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Pembayaran</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View> 
        : <EmptyCart />
        }
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
  totalStyle: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Avenir'

  }
}