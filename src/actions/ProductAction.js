import firebase from 'firebase'
import {
  PRODUCT_UPDATE,
  PRODUCT_ADD,
  PRODUCT_FETCH_SUCCESS 
} from './types'

export const productUpdate = ({ prop, value }) => {
  return {
    type: PRODUCT_UPDATE,
    payload: { prop, value }
  }
}

export const productAdd = ({ product, price }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/products`)
      .push({ product, price: Number(price), createdBy: currentUser.uid })
      .then(() => {
        dispatch({ type: PRODUCT_ADD })
      })
  }
}

export const productFetch = () => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/products`)
      .on('value', snapshot => {
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}