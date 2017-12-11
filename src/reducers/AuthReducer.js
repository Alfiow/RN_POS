import { 
  TEXT_CHANGED, 
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  NAME_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  name: '',
  error: '',
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.text }
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: 'afdafd', password: '', loading: false }
    case NAME_CHANGED:
      return { ...state, name: action.payload }
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' }
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case SIGNUP_USER_FAIL:
      return { ...state, error: action.payload, password: '', user: null, loading: false }     
    default:
    return state
  }
}