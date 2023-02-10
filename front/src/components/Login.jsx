import { useState } from 'react'
import axios from 'axios'

import styles from '../styleComponents/Login.module.css'

export const Login = () => {
  const [data, setData] = useState({
    nickname: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newDatos = { ...data, [name]: value }
    setData(newDatos)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!e.target.checkValidity()) {
      console.log('no enviar')
    } else {
      const res = await axios.post('http://localhost:8000/login', data)
      console.log(res.data)
    }
  }

  return (
    <div className={styles.container}>
    <div className={styles.loginContainer}>
      <h1>INICIAR SESIÓN</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.textbox}>
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder='Usuario'
            onChange={handleInputChange}
            value={data.nickname}
          />
        </div>

        <div className={styles.textbox}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Contraseña'
            onChange={handleInputChange}
            value={data.password}
          />
        </div>

        <button
          type="submit"
          className="btn-input"
          disabled={data ? '' : 'disabled'}
        >
          INICIAR SESIÓN
        </button>
      </form>
    </div>
    </div>
  )
}
