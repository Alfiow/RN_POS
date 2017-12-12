import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  CUSTOMER_UPDATE,
  CUSTOMER_ADD
} from './types'

export const customerUpdate = ({ prop, value }) => {
  return {
    type: CUSTOMER_UPDATE,
    payload: { prop, value }
  }
}

export const customerAdd = ({ nama, email, phone }) => {
  const { currentUser } = firebase.auth()
  
  return (dispatch) => {
    firebase.database().ref('customers')
      .push({ nama, email, phone, createdBy: currentUser.uid })
      .then(() => {
        dispatch({ type: CUSTOMER_ADD })
        Actions.pop({ key: 'cart', type: 'reset' })
      })
  }
}