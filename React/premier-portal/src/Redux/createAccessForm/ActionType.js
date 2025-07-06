import { toast } from "sonner";
import api, { API_BASE_URL } from "../../config/api"
import { CREATE_FORM_FAILURE, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS } from "./Action"
import axios from "axios";

export function createForm(usreData) {
  return async function (dispatch) {
    dispatch({ type: CREATE_FORM_REQUEST })
    console.log(usreData);
    
    
    try {
      const { data } = await axios.post(`${API_BASE_URL}/access-control-form/create`,usreData,{
        
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        
      })
      console.log("in reducer data and usreData", data, usreData);
      

      dispatch({ type: CREATE_FORM_SUCCESS, payload: data })
      toast.success("Form Created Successfully")
    } catch (error) {
      console.log(error);
      dispatch({ type: CREATE_FORM_FAILURE, error: error })
    }
  }
}