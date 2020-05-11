import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL // gets environment variable from env/webdev.envv

async function loginUser (email, password) {
  return axios.post(`${API_URL}/api/clients/login`, { email, password })
}

async function getUser (token) {
  const { id, userId } = token

  return axios.get(`${API_URL}/api/clients/${userId}`, {
    headers: {
      Authorization: id,
    },
  })
}

async function getCategories (email, password) {
  return axios.post(`${API_URL}/api/clients/login`, { email, password })
}

export default { loginUser, getUser }