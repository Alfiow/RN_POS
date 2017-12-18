import React, { Component } from 'react'
import { View, Text, ListView, Image } from 'react-native'

const ProfileComponent = ({ username, email }) =>
  <View style={{ flexDirection:'row', paddingBottom: 30, paddingTop: 20 }}>
		<Image source={require('./images/if_social_store_house_710261.png')} resizeMode="contain" style={{margin:10, width:80, height:80, borderRadius:30}} />
  	<View style ={{justifyContent:'center', margin:15}}>
    	<Text style={{fontWeight:'700', fontSize:25, color:'#444'}}>{username}</Text>
    	<Text style={{fontWeight:'200', color:'#999'}}>{email}</Text>
  	</View>
  </View>


export default ProfileComponent
