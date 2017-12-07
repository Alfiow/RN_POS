import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import AuthReducer from './AuthReducer'
import ProductFormReducer from './ProductFormReducer'
import ProductListReducer from './ProductListReducer'
import { devSettings } from '../constants'

const middleWares = []
middleWares.push(thunk)
if (devSettings.logRedux) {
  middleWares.push(logger())
}

const reducers = combineReducers({
  auth: AuthReducer,
  productForm: ProductFormReducer,
  products: ProductListReducer
})
const store = createStore(reducers, undefined, applyMiddleware(...middleWares))

export default store
