import _ from 'lodash'
import {
  TRANSACTION_FETCH_SUCCESS,
  REPORT_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  transactions:[],
  orders: []
}

export default (state= INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_FETCH_SUCCESS:
      return { transactions: action.payload }
    case REPORT_FETCH_SUCCESS:
      return { transactions: action.payload }
    default:
      return state
  }
}