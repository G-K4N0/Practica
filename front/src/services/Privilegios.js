import axios from 'axios'

const BASE_URL = 'http://192.168.2.41:8000/privilegio'

const getPrivilegio = async () => {
  const privilegios = await axios.get(BASE_URL)
  const privilegio = privilegios.data
  return privilegio
}

export default getPrivilegio
