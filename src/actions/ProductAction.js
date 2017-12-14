import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  PRODUCT_UPDATE,
  PRODUCT_ADD,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_SAVE_SUCCESS,
  AddToCart,
  RemoveItemCart,
  UpdateExistingItemQuantity,
  RemoveSingleItemFromCart
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
      .push({ product, price: Number(price), createdBy: currentUser.uid, quantity: 0 })
      .then(() => {
        dispatch({ type: PRODUCT_ADD })
        Actions.pop({ key: 'list', type: 'reset' })
      })
  }
}

export const productFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    //firebase.database().ref(`/products`).orderByChild("createdBy").equalTo(currentUser.uid)
    firebase.database().ref('products')
      .on('value', snapshot => {
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}

export const productSave = ({ product, price, uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/products/${uid}`)
    .update({ product, price })
    .then(() => {
      dispatch({ type: PRODUCT_SAVE_SUCCESS })
      Actions.drawer({ type: 'reset' })
    })
  }
}

export function AddCart(product) {
  return {
    type: AddToCart,
    product,
  };
}

export function RemoveCart(index, product) {
  return {
    type: RemoveItemCart,
    index,
    product,
  };
}

export function UpdateExistingItemQuantityCart(index, product, quantity) {
  return {
    type: UpdateExistingItemQuantity,
    index,
    product,
    quantity,
  };
}

export function RemoveSingleItemCart(index, product, quantity) {
  return {
    type: RemoveSingleItemFromCart,
    index,
    product,
    quantity,
  };
}

export const transactionOrder = (products) => {
  const { currentUser } = firebase.auth()

  return () => (
    firebase.database().ref(`/transactions`)
      .push({ createdBy: currentUser.uid })
      .then((result => {
        products.map(res => {
          firebase.database().ref(`/orders/${result.key}`)
            .push({
              createdBy: res.createdBy,
              price: res.price,
              product: res.product,
              quantity: res.quantity,
              uid: res.uid,
            })
          Actions.payment()
        })
      }))
  )
}