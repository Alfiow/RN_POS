import React, { Component } from 'react'
import { Scene, Router, Stack, Drawer, TabBar } from 'react-native-router-flux'

import Launch from './Launch'
import Login from './components/Login'
import SignUp from './components/SignUp'
import TabIcon from './TabIcon'
import DrawerContent from './DrawerContent'
import MenuIcon from './images/drawer.png'

import ProductAdd from './components/ProductAdd'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene initial key='launch' component={Launch} hideNavBar />
        <Scene key='login' component={Login} hideNavBar />
        <Scene key='signup' component={SignUp} title='Data Toko Anda' />

        <Drawer hideNavBar key='drawer' contentComponent={DrawerContent} drawerImage={MenuIcon}>
          <Scene key='list' component={ProductList} tabBarStyle={styles.tabBarStyle} />
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