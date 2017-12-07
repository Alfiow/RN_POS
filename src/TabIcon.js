import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const TabIcon = (props) => {
  return (
    <View>
      <Icon name={props.name} size={props.focused ? 30 : 30} />
      <Text style={{ color: props.focused ? 'white' : 'black' }}>
        {props.title}
      </Text>
    </View>
  )
};

export default TabIcon;
