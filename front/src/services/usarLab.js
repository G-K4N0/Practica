import axios from 'axios'

const baseUrl = 'http://192.168.2.41:8000/labs'

const getAllLabs = async () => {
  const data = axios.get(baseUrl)
  return data
}

export default getAllLabs
