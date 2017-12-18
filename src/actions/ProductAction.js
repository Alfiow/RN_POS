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
  RemoveSingleItemFromCart,
  PAYMENT_UPDATE,
  TRANSACTION_FETCH_SUCCESS,
  REPORT_FETCH_SUCCESS
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
    firebase.database().ref(`/products`).orderByChild("createdBy").equalTo(currentUser.uid)
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

export const productDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/products/${uid}`)
      .remove()
      .then(() => {
        Actions.drawer({ type: 'reset' })
      });
  };
};

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

export const paymentUpdate = ({ prop, value }) => {
  return {
    type: PAYMENT_UPDATE,
    payload: { prop,value }
  }
}

export const transactionOrder = ({ products, name, payment, bayar, total }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => (
    firebase.database().ref(`/transactions`)
      .push({ 
        createdBy: currentUser.uid, 
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        name,
        payment,
        bayar: Number(bayar),
        total: Number(total),
      })
      .then((result => {
        firebase.database().ref(`/transactions/${result.key}`)
          .update({ updateBy: result.key })

        products.map(res => {
          res.quantity > 0 ?
          firebase.database().ref(`/orders/${result.key}/${res.uid}`)
            .set({
              createdBy: res.createdBy,
              price: res.price,
              product: res.product,
              quantity: res.quantity,
              transactionID: result.key
            }) : null

          firebase.database().ref(`/transactions`).orderByChild("updateBy").equalTo(result.key)
            .on('value', snapshot => {
              dispatch({ type: TRANSACTION_FETCH_SUCCESS, payload: snapshot.val() })
            })
          Actions.transactions()
          })
      }))
  )
}

export const reportFetch = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/transactions`).orderByChild("createdBy").equalTo(currentUser.uid)
      .on('value', snapshot => {
        dispatch({ type: REPORT_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}