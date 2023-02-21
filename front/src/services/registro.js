import axios from 'axios'

const baseUrl = 'http://192.168.2.41:8000/users'

const registro = async (data) => {
  const response = await axios.post(baseUrl, data)

  return response
}
export default registro
