import firebase from 'firebase'
import {
  PRODUCT_UPDATE,
  PRODUCT_ADD,
  PRODUCT_FETCH_SUCCESS,
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
      .push({ product, price: Number(price), createdBy: currentUser.uid, quantity: 1 })
      .then(() => {
        dispatch({ type: PRODUCT_ADD })
      })
  }
}

export const productFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    //firebase.database().ref(`/products`).orderByChild("createdBy").equalTo(currentUser.uid)
    firebase.database().ref('products')
      .on('value', snapshot => {
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() })
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

