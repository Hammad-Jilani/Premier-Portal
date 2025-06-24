import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT } from "./Action."
import { API_BASE_URL } from "../../config/api"

export function login(userData) {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_REQUEST })
    try {
      const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
      localStorage.setItem('jwt', data.jwt)
      
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAILURE, error: error.response.data })      
    }
  }
}
export function getUser() {
  return async function (dispatch) {
    dispatch({ type: GET_USER_REQUEST })
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })

      dispatch({ type: GET_USER_SUCCESS, payload: data })

    } catch (error) {
      dispatch({ type: GET_USER_FAILURE, error: error.message })
    }
  }
}
export function logout(){
  return async function (dispatch) {
    dispatch({type:LOGOUT})
    localStorage.clear()
  }
}