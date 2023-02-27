import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/rihor/rocketshoes_json_server',
})

export default api
