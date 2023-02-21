import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../services/AuthProvider'
import { useNavigate } from 'react-router-dom'

import login from '../../services/login'

import styles from '../styleComponents/Login.module.scss'

export const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [succes, setSucces] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = login({ nickname: user, password: pwd })
      const token = response?.data?.token
      const privilegio = response?.data?.privileges

      setAuth({ user, pwd, privilegio, token })
      setUser('')
      setPwd('')
      setSucces(true)
    } catch (error) {
      if (!error?.response) {
        setErrMsg('El servidor no responde')
      } else if (error.response?.status === 400) {
        setErrMsg('Usuario y/o contraseña incorrectos')
      } else if (error.response?.status === 401) {
        setErrMsg('Sin autorización')
      } else {
        setErrMsg('Inicio fallido')
      }
      console.log(succes)
      errRef.current.focus()
    }
  }

  useEffect(() => {
    if (succes) {
      navigate('/dashboard')
    }
  })
  return (
    <div className={styles.divContent}>
      <section className={styles.container}>
        <p
          ref={errRef}
          className={errMsg ? styles.errMsg : styles.offscreen}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Iniciar Sesión</button>
        </form>
      </section>
    </div>
  )
}
