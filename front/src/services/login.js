import axios from 'axios'

const baseUrl = 'http://192.168.2.41:8000/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)

  localStorage.setItem('token', response.data.token)
  return response
}
export default login
