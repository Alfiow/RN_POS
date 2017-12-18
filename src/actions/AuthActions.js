import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { 
  TEXT_CHANGED, 
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  NAME_CHANGED,
  USER_FETCH_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  NEWSTORY_UPDATED_STORIES_LOGIN,
} from './types'

export const textChanged = ({ prop, text }) => {
  return {
    type: TEXT_CHANGED,
    payload: { prop, text }
  }
}

export const loginUser = ({ email, password }) => {
  // ReduxThunk connection : use dispatch, return a function
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        loginUserFail(dispatch)
      })
  }  
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.list()
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text,
  }
}

export const signUpUser = ({ email, password, name }) => {
 
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER })
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUpUserSuccess(dispatch, user, name, email))
      .catch((error) => {
        console.log(error)
        const errorMessage = error.message
        return signUpUserFail(dispatch, errorMessage)
      })
  }
  return
}

const signUpUserSuccess = (dispatch, user, name, email) => {
  const { currentUser } = firebase.auth();
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user,
  })
  firebase.database().ref(`/users/${currentUser.uid}`)
  .set({ name, email, createdBy: currentUser.uid })
  Actions.launch()
}

const signUpUserFail = (dispatch, errorMessage) => {
  console.log('signUpUserFail!: ', errorMessage)
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: errorMessage
  })
}

export const logoutUser = () => {
  firebase.auth().signOut()
    .then(() => Actions.launch());
}

export const userFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users`).orderByChild("createdBy").equalTo(currentUser.uid)
      .on('value', snapshot => {
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}