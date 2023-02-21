import axios from 'axios'

const baseUrl = 'http://192.168.2.41:8000/users'

export const getAllUsers = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}
