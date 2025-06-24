import { LOADING_END, LOADING_START } from "./Action"

export function startLoading(){
  return async function (dispatch) {
    dispatch({type:LOADING_START})
  }
}

export function endLoading(){
  return async function (dispatch) {
    dispatch({type:LOADING_END})
  }
}