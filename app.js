import React, { Component, PropTypes } from 'react'
import { AppRegistry } from 'react-native'
import { hookConsoleLog } from 'stacklogger'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import store from './src/reducers'
import Router from './src/Router'
import list from './src/components/ProductList'

hookConsoleLog()

export default class app extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCe6mKvWdpzCrKK2ztLOoXM_yZyh3syyLE",
      authDomain: "posales-a9174.firebaseapp.com",
      databaseURL: "https://posales-a9174.firebaseio.com",
      projectId: "posales-a9174",
      storageBucket: "posales-a9174.appspot.com",
      messagingSenderId: "847669923852"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Actions.list()
      } else {
        Actions.launch()
      }
    });
  }


  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('POS', () => app)
