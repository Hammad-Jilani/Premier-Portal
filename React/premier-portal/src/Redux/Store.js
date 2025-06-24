import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { LOGOUT } from "./Auth/Action.";
import authReducer from "./Auth/Reducer";
import createAccessFormReducer from "./createAccessForm/Reducer";
import loadingReducer from "./Loading/Reducer";

const appReducer = combineReducers({
  auth: authReducer,
  createAccessForm: createAccessFormReducer,
  loading:loadingReducer
})

const rootReducer = (state, action) => {
  if (action.type == LOGOUT) {
    state = undefined
  }
  return appReducer(state, action)
}

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))