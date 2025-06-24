import { toast } from "sonner";
import api from "../../config/api"
import { CREATE_FORM_FAILURE, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS } from "./Action"

export function createForm(usreData) {
  return async function (dispatch) {
    dispatch({ type: CREATE_FORM_REQUEST })
    console.log(usreData);
    
    
    try {
      const { data } = await api.post('/access-control-form/create',usreData)
      console.log("in reducer data and usreData", data, usreData);
      

      dispatch({ type: CREATE_FORM_SUCCESS, payload: data })
      toast.success("Form Created Successfully")
    } catch (error) {
      console.log(error);
      dispatch({ type: CREATE_FORM_FAILURE, error: error })
    }
  }
}