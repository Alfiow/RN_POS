import _ from 'lodash'
import {
  PRODUCT_FETCH_SUCCESS,
  AddToCart,
  RemoveItemCart,
  UpdateExistingItemQuantity,
  RemoveSingleItemFromCart,
  TRANSACTION_ORDER_ADDED 
} from '../actions/types'

const INITIAL_STATE = {
  products: []
}

export default (state = INITIAL_STATE, action) => {
  //console.log(action)
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        products : _.map(action.payload, (val, uid) => {
          return { ...val,
            uid
          }
        })
      }

    case AddToCart:
      return {
        products: [...state.products, action.product]
      };

    case RemoveItemCart:
      return {
        products: [
          ...state.products.slice(0, action.index),
          ...state.products.slice(action.index + 1)
        ]
      };

    case UpdateExistingItemQuantity:
      return {
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              quantity: action.quantity
            });
          }
          return product
        })
      };

    case RemoveSingleItemFromCart:
      return {
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              quantity: action.quantity
            });
          }
          return product;
        })
      };

    case TRANSACTION_ORDER_ADDED:
      return INITIAL_STATE
        
    default:
      return state
  }
}