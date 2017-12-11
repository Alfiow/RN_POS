import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Scene, Router, Stack, Drawer, Tabs } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import Launch from './Launch'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DrawerContent from './DrawerContent'
import MenuIcon from './images/drawer.png'

import ProductAdd from './components/ProductAdd'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import CartContainer from './components/CartContainer'

import style from './components/CartStyles'

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene key='launch' component={Launch} hideNavBar />
        <Scene key='login' component={Login} hideNavBar />
        <Scene key='signup' component={SignUp} title='Data Toko Anda' />
        <Scene key='addform' component={ProductAdd} title='Tambah produk' />

        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerImage={MenuIcon}
        >
            <Stack
              navigationBarStyle={{ backgroundColor: '#66cccc' }}
              titleStyle={{ color: '#f7f7f7', alignSelf: 'flex-start' }}
              renderRightButton={() => { 
                return (
                  <View style={style.CartItem}>
                    <TouchableOpacity onPress={() => Actions.cart()} style={{ padding : 10 }}>
                      <Icon name="shopping-cart" type="action" size={25} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.addform()}>
                      <Icon name="input" type="action" size={25} color="white" />
                    </TouchableOpacity>
                  </View>
                )}
              }
            >
              <Scene 
                initial
                key='list' 
                component={ProductList}
                title='Produk'
              />
            </Stack>

            <Stack
              navigationBarStyle={{ backgroundColor: '#66cccc' }}
              titleStyle={{ color: '#f7f7f7', alignSelf: 'flex-start' }}
              renderLeftButton={() => {
                return (
                  <View style={style.CartItem}>
                    <TouchableOpacity onPress={() => Actions.list()} style={{ padding: 10 }}>
                      <Icon name="remove-shopping-cart" type="action" color="white" />
                    </TouchableOpacity>
                  </View>
                )}
              }
              renderRightButton={() => {
                return (
                  <View style={style.CartItem}>
                    <TouchableOpacity onPress={() => Actions.list()} style={{ padding: 10 }}>
                      <Icon name="account-circle" type="action" color="white" />
                    </TouchableOpacity>
                  </View>
                )}
              }
            >
              <Scene
                key='cart'
                component={CartContainer}
                title='keranjang belanja'
              />
            </Stack>
            
        </Drawer>
      </Stack>
    </Router>
  )
}

const styles = {
  tabBarStyle: {
    backgroundColor: 'blue',
  }
};

export default RouterComponent;