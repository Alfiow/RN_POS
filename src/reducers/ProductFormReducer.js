import {
  PRODUCT_UPDATE,
  PRODUCT_ADD,
  PRODUCT_SAVE_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {
  product: '',
  price: '',
  code: ''
}

export default (state = INITIAL_STATE, action) => {
  //console.log(action)
  switch (action.type) {
    case PRODUCT_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    case PRODUCT_ADD:
      return INITIAL_STATE
    case PRODUCT_SAVE_SUCCESS:
      return INITIAL_STATE
    default:
      return state
  }
}