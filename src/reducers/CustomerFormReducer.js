import {
  CUSTOMER_UPDATE,
  CUSTOMER_ADD
} from '../actions/types'

const INITIAL_STATE = {
  nama: '',
  email: '',
  phone: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case CUSTOMER_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    case CUSTOMER_ADD:
      return INITIAL_STATE
    default:
      return state
  }
}