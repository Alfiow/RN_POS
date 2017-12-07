import React from 'react'
import { View, TextInput, Text } from 'react-native'

class FloatingLabelInput extends React.Component {
  render() {
    const { label, ...props } = this.props
    return (
      <View>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={styles.textInputStyle}
        />
      </View>
    )
  }
}

const styles = {
  textInputStyle: {
    marginBottom: 10,
    width: 280,
    height: 35,
    fontSize: 17,
    fontFamily: 'Avenir',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
}

const labelStyle = {
  position: 'absolute',
  fontFamily: 'Avenir',
  backgroundColor: 'transparent'
}

export { FloatingLabelInput }