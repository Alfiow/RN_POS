import React, { Component } from "react";
import { View, Picker } from "react-native";
import { Button } from 'react-native-elements'
import { width } from '../config/constants'
import { Container, Header, Content, List, ListItem, Text, Separator, Input } from 'native-base';

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
          <ListItem>
            <Text style={{ flex: .7 }}>Total bayar</Text>
            <Text style={{ flex: .3, fontSize: 18 }}>{this.props.totalPrice}</Text>
          </ListItem>

          <ListItem>
            <Text style={{ flex: .7 }}>Nama Customer</Text>
            <Input
              style={{ flex: .3 }}
              placeholder='optional'
              placeholderTextColor={'grey'}
              onChangeText={value => this.props.paymentUpdate({ prop: 'name', value })} 
            />
          </ListItem>

          <ListItem>
            <Text style={{ flex: .7 }}>Bayar dengan</Text>
            <Picker
              style = {{ flex: .3 }}
              textStyle={{ fontSize: 12, color: 'yellow' }}
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.props.payment.payment}
              onValueChange={value => this.props.paymentUpdate({ prop: 'payment', value })}
            >
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label={this.props.totalPrice} value="Credit" />
            </Picker>
          </ListItem>

          <ListItem> 
            <Text style={{ flex: .7 }}>Jumlah</Text>
            <Input
              placeholderTextColor={'grey'} 
              style={{ flex: .3 }}
              //value={payment}
              placeholder={'00000'}
              keyboardType='numeric'
              onChangeText={value => this.props.paymentUpdate({ prop: 'bayar', value })} 
            />
          </ListItem>

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