import axios from "axios"

const baseUrl = "http://localhost:3000"
const url = `${baseUrl}/boards`

const boardsApi = {
  create(board, token) {
    return axios.post(url, board, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
  retrieve(id, token) {
    return axios.get(`${url}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
  update(id, change, token) {
    return axios.put(`${url}/${id}`, change, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
  delete(id, token) {
    return axios.delete(`${url}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
  list(token) {
    return axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

export default boardsApi
