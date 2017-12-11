import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, View, ListView, TouchableOpacity } from "react-native";
import { Button, FormLabel, FormInput, Icon } from "react-native-elements";
import { width } from "../config/constants";
import DeliveryButton from "./Buttons/DeliveryButton";
import CollectionButton from "./Buttons/CollectionButton";

import style from "./CartStyles";

const EmptyCart = () => (
  <View style={style.emptyCart}>
    <Text>Please add items in order to proceed!</Text>
  </View>
)

export default class Cart extends Component {

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
              <Text style={{ flex: 0.1 }}>{product.quantity}x</Text>
              <Text style={{ padding: 10, flex: 0.5 }}>
                {product.product.toString()}
              </Text>
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
  //{ this.displayProductChoices(product) }
  // displayProductChoices(product) {
  //   if (product.type === "burger") {
  //     return (
  //       <View style={{ marginLeft: 50, paddingBottom: 10 }}>
  //         <Text>-{product.salad.toString()}</Text>
  //         <Text>-{product.sauce.toString()}</Text>
  //         <Text>-{product.cheese.toString()}</Text>
  //       </View>
  //     );
  //   } else if (product.type === "kebab") {
  //     return (
  //       <View style={{ marginLeft: 50, paddingBottom: 10 }}>
  //         <Text>-{product.salad.toString()}</Text>
  //         <Text>-{product.sauce.toString()}</Text>
  //         <Text>-{product.bread.toString()}</Text>
  //       </View>
  //     );
  //   } else if (product.type === "pizza" && product.extra_toppings) {
  //     return (
  //       // TODO: A ListView of all extra toppings should be appended here
  //       <ListView style={{ marginLeft: 90, paddingBottom: 10 }}>
  //         <Text>-{product.salad.toString()}</Text>
  //       </ListView>
  //     );
  //   } else {
  //   }
  // }

  render() {
    // console.log(this.props.products.uid)
    return (
      <View style={style.CartContainer}>
        <View style={{ flex: 3, padding: 10 }}>
          {this.props.products.length > 0 ? this.displayCart() : <EmptyCart />}
        </View>

        <View style={style.cartSummaryContainer}>
          <View style={style.accumulatorContainer}>
            <Text style={style.totalItems}>
              Total Items {this.props.totalItemsInCart}
            </Text>
            <Text style={style.totalPrice}>
              Total Rp.{this.props.totalPrice}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
