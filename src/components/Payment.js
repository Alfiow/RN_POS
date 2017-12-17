import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Container, Content, Input } from "native-base";
import { Button } from 'react-native-elements'
import { width } from '../config/constants'
const Item = Picker.Item;

import style from "./CartStyles";

export default class Payment extends Component {
  onButtonPress() {
    const { name, payment, bayar } = this.props.payment
    const products = this.props.products
    this.props.transactionAndOrderTable({ 
      products, 
      name, 
      bayar, 
      payment: payment || 'Cash',
      total: this.props.totalPrice
    })
  }

  render() {
    return (   
      <Container>
        <Content>
          <View style={style.CartProductContainer}>
            <View style={style.CartItem}>
              <Text style={styles.labelStyle}>Total bayar</Text>
              <Text style={{ flex: 0.4, fontSize: 18 }}>{this.props.totalPrice}</Text>
            </View>
          </View>

          <View style={style.CartProductContainer}>
            <View style={style.CartItem}>
              <Text style={styles.labelStyle}>Nama Customer</Text>
              <Input
                style={{ flex: 0.5, }}
                placeholder='optional'
                placeholderTextColor={'grey'}
                onChangeText={value => this.props.paymentUpdate({ prop: 'name', value })} 
              />
            </View>
          </View>

          <View style={style.CartProductContainer}>
            <View style={style.CartItem}>
              <Text style={styles.labelStyle}>Bayar dengan</Text>
              <Picker
                style={styles.picker}
                textStyle={{ fontSize: 12, color: 'yellow' }}
                mode="dropdown"
                placeholder="Select One"
                selectedValue={this.props.payment.payment}
                onValueChange={value => this.props.paymentUpdate({ prop: 'payment', value })}
              >
                <Item label="Cash" value="Cash" />
                <Item label={this.props.totalPrice} value="Credit" />
              </Picker>
            </View>
          </View>

          <View style={style.CartProductContainer}>
            <View style={style.CartItem}> 
              <Text style={styles.labelStyle}>Jumlah</Text>
              <Input
                placeholderTextColor={'grey'} 
                style={{ flex: 0.4 }}
                //value={payment}
                placeholder={'00000'}
                keyboardType='numeric'
                onChangeText={value => this.props.paymentUpdate({ prop: 'bayar', value })} 
              />
            </View>
          </View>

          <Button
            buttonStyle={{ marginTop: 20, width: width, height: 40, borderWidth: 1, borderColor: 'white', alignSelf: 'center' }}
            backgroundColor="white"
            borderRadius={20}
            title="Bayar"
            color="#66cccc"
            fontFamily="Avenir"
            fontWeight="bold"
            fontSize={16}
            onPress={this.onButtonPress.bind(this)}
          />

        </Content>
      </Container>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    padding: 15,
    flex: .6
  },
  picker: {
    color: '#66cccc',
    width: 110,
    height: 40,
  },
};