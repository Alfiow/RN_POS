import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Transaction extends Component {


  render() {
    const enabled = this.props.collectionEnabled
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: .40, backgroundColor: 'grey' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: .15, padding: 10 }}>Total</Text>

            <Text style={{ flex: .30, padding: 10 }}>Rp. 10.000</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: .15, padding: 10 }}>Total</Text>

            <Text style={{ flex: .30, padding: 10 }}>Rp. 10.000</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: .15, padding: 10 }}>Total</Text>

            <Text style={{ flex: .30, padding: 10 }}>Rp. 10.000</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: .15, padding: 10 }}>Total</Text>

            <Text style={{ flex: .30, padding: 10 }}>Rp. 10.000</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: .15, padding: 10 }}>Total</Text>

            <Text style={{ flex: .30, padding: 10 }}>Rp. 10.000</Text>
          </View>

        </View>
      </View>
    )
  }
}

export default Transaction
