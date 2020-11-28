import axios from "axios"

const baseUrl = "http://localhost:3000"
const url = `${baseUrl}/lists`

const listApi = {
  create(newList, token) {
    return axios.post(url, newList, {
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

export default listApi
