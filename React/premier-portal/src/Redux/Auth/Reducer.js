import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./Action."

const initialState = {
  user: null,
  loading: false,
  error: null,
  message: '',
  jwt: null
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, loading: true }

    case GET_USER_SUCCESS:
      return { ...state, loading: false, message: 'Login Successful', user: action.payload }

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, jwt: action.payload.jwt }

    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: action.error,message:'Incorrect Credentials' }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default authReducer