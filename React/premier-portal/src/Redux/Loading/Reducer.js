import { LOADING_END, LOADING_START } from "./Action";

const initialState={
  loading:false
}

const loadingReducer=(state=initialState,action)=>{
  switch (action.type) {
    case LOADING_START:
      return {...initialState,loading:true}
  
    case LOADING_END:
      return {...initialState,loading:false}
    default:
      return state
  }
}

export default loadingReducer;