import {
  PAYMENT_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  payment: '',
  bayar: '',
  sisa: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case PAYMENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}