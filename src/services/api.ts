import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fake-api.herokuapp.com/',
})

export default api
