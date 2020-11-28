import axios from "axios"

const baseUrl = "http://localhost:3000"
const url = `${baseUrl}/cards`

const cardApi = {
  create(newCard, token) {
    return axios.post(url, newCard, {
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
}

export default cardApi
