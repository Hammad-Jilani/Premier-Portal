import { CREATE_FORM_FAILURE, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS } from "./Action";

const initialState = {
  form: {},
  error: null,
  loading: null,
  message: '',
  page: 0,
  totalPages: 0,
  searchContact: null,
  contactDetail: null
}

function createAccessFormReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_FORM_REQUEST:
      return { ...initialState, loading: true }

    case CREATE_FORM_SUCCESS:
      return { ...initialState, form: action.payload, loading: false }

    case CREATE_FORM_FAILURE:
      return { ...initialState, error: action.error, loading: false }
    default:
      return state
  }
}
export default createAccessFormReducer