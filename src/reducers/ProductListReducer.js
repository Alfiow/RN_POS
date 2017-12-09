import _ from 'lodash'
import {
  PRODUCT_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  products: []
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        products : _.map(action.payload, (val, uid) => {
          return { ...val,
            uid
          }
        })
      }
    default:
      return state
  }
}