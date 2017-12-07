import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card } from 'react-native-elements'

class ListItem extends Component {

  render() {
    const { product, price } = this.props.produk

    return(
      
        <View>
          <Card>
            <Text style={styles.titleStyle}>
              {product}
            </Text>
            <Text style={styles.titleStyle}>
              {price}
            </Text>
          </Card>
        </View>
     
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem