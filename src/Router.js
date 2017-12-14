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
import ProductEdit from './components/ProductEdit'

import CartContainer from './components/CartContainer'
import CartPayContainer from './components/CartPayContainer'
import PaymentContainer from './components/PaymentContainer'

import CustomerAdd from './components/CustomerAdd'

import style from './components/CartStyles'

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene key='launch' component={Launch} hideNavBar />
        <Scene key='login' component={Login} hideNavBar />
        <Scene key='signup' component={SignUp} title='Data Toko Anda' />

        <Scene key='productadd' component={ProductAdd} title='Tambah produk' />

        <Scene key='customeradd' component={CustomerAdd} title='tambah customer' />
    
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerWidth={200}
          drawerImage={MenuIcon}
        >
          <Stack
            navigationBarStyle={{ backgroundColor: '#66cccc' }}
            titleStyle={{ color: '#f7f7f7', alignSelf: 'flex-start' }}
            renderRightButton={() => { 
              return (
                <View style={style.CartItem}>
                  <TouchableOpacity onPress={() => Actions.drawer()} style={{ padding: 10 }}>
                    <Icon name="refresh" type="navigation" size={25} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Actions.cart()} style={{ padding : 10 }}>
                    <Icon name="search" type="action" size={25} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Actions.productadd()}>
                    <Icon name="input" type="action" size={25} color="white" />
                  </TouchableOpacity>
                </View>
              )}
            }
          >
            <Scene 
              key='list' 
              component={ProductList}
              title='Produk'
            />
          </Stack>
        </Drawer>

        <Scene key='nodrawer' hideNavBar renderBackButton={() => (null)}>

            <Stack
              navigationBarStyle={{ backgroundColor: '#66cccc' }}
              titleStyle={{ color: '#f7f7f7', alignSelf: 'flex-start' }}
              renderLeftButton={() => {
                return (
                  <View style={style.CartItem}>
                    <TouchableOpacity onPress={() => Actions.list()} style={{ padding: 10 }}>
                      <Icon name="arrow-back" type="navigation" color="white" />
                    </TouchableOpacity>
                  </View>
                )}
              }
            >
              <Scene
                drawer={false}
                key='cart'
                component={CartContainer}
                title='Pesanan'
              />
            </Stack>

            <Stack
              navigationBarStyle={{ backgroundColor: '#66cccc' }}
              titleStyle={{ color: '#f7f7f7', alignSelf: 'flex-start' }}
              renderLeftButton={() => {
                return (
                  <View style={style.CartItem}>
                    <TouchableOpacity onPress={() => Actions.cart()} style={{ padding: 10 }}>
                      <Icon name="arrow-back" type="navigation" size={25} color="white" />
                    </TouchableOpacity>
                  </View>
                )}
              }
            >
              <Scene
                key='payment'
                component={PaymentContainer}
                title='Konfirmasi Pembayaran'
              />
            </Stack>

            <Stack
              navigationBarStyle={{ backgroundColor: '#66cccc' }}
              titleStyle={{ color: '#f7f7f7', alignSelf: 'flex-start' }}
              renderLeftButton={() => {
                return (
                  <View style={style.CartItem}>
                    <TouchableOpacity onPress={() => Actions.list()} style={{ padding: 10 }}>
                      <Icon name="arrow-back" type="navigation" color="white" />
                    </TouchableOpacity>
                  </View>
                )
              }
              }
            >
              <Scene
                key='productedit'
                component={ProductEdit}
                title='Edit produk'
              />
            </Stack>

          </Scene>
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

// public componentWillMount(): void {
//   this.props.navigation.setParams({
//     onRight: () => { this.myOnRight(); },
//     rightTitle: 'newTitle',
//   })
// }