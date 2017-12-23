import { 
  TEXT_CHANGED, 
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  NAME_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  USER_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  name: '',
  error: '',
  errors: '',
  loading: false,
  users: []
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case TEXT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.text }
    case LOGIN_USER:
      return { ...state, loading: true, errors: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, errors: action.payload, password: '', loading: false }
    case NAME_CHANGED:
      return { ...state, name: action.payload }
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' }
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case SIGNUP_USER_FAIL:
      return { ...state, error: action.payload, password: '', user: null, loading: false }     
    case USER_FETCH_SUCCESS:
      return { users: action.payload }
    default:
      return state
  }
}