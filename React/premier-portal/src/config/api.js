import axios from "axios"

export const API_BASE_URL = "http://localhost:8091"

const api = axios.create({ baseURL: API_BASE_URL })
const jwt = localStorage.getItem("jwt")

api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
api.defaults.headers.common['Content-Type'] = 'application/json'

export default api