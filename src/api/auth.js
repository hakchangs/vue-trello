import axios from "axios"

const baseUrl = "http://localhost:3000"

const authApi = {
  login({ email, password }) {
    const url = `${baseUrl}/login`
    return axios.post(url, { email, password })
  },
}

export default authApi
