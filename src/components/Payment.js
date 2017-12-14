import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Container, Content, Input } from "native-base";
import { Button } from 'react-native-elements'
import { width } from '../config/constants'
const Item = Picker.Item;

import style from "./CartStyles";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (   
      <Container>
        <Content>
          <View style={{ borderBottomWidth: 0.5, borderBottomColor: "grey" }}>
            <View style={style.CartItem}>
              <Text style={styles.pickerTextStyle}>Nama Customer</Text>
              <Input
                style={{ flex: 0.5, }}
                value={this.props.totalPrice}
                placeholder='optional'
                placeholderTextColor={'grey'} 
              />
            </View>
          </View>

          <View style={{ borderBottomWidth: 0.5, borderBottomColor: "grey" }}>
            <View style={style.CartItem}>
              <Text style={styles.pickerTextStyle}>Bayar dengan</Text>
              <Picker
                style={styles.picker}
                textStyle={{ fontSize: 12, color: 'yellow' }}
                mode="dropdown"
                placeholder="Select One"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label="Cash" value="key0" />
                <Item label="Credit" value="key1" />
              </Picker>
            </View>
          </View>

          <View style={{ borderBottomWidth: 0.5, borderBottomColor: "grey" }}>
            <View style={style.CartItem}> 
              <Text style={styles.pickerTextStyle}>Jumlah</Text>
              <Input
                placeholderTextColor={'grey'} 
                style={{ flex: 0.3, }}
                value={this.props.totalPrice}
                placeholder={'00000'}
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
          />

        </Content>
      </Container>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    padding: 15,
  },
  picker: {
    color: '#66cccc',
    width: 110,
    height: 40,
  },
};