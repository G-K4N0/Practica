import { useRef, useState, useEffect } from 'react'
import registro from '../../../services/registro.js'
import {
  faCheck,
  faTimes,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Registrar.module.scss'
import getPrivilegio from '../../../services/Privilegios.js'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Registrar = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [name, setName] = useState('')
  const [nameFocus, setNameFocus] = useState(false)

  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [matchPassword, setMatchPassword] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const [privilege, setPrivilege] = useState([])

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(name)
    console.log(result)
    console.log(name)
  }, [name])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidUser(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(password)
    console.log(result)
    console.log(password)
    setValidPassword(result)
    const match = password === matchPassword
    setValidMatch(match)
  }, [password, matchPassword])

  useEffect(() => {
    setErrorMessage('')
  }, [name, user, password, matchPassword])

  const handleRegister = async (e) => {
    e.preventDefault()

    const userTest = USER_REGEX.test(user)
    const pwdTest = PWD_REGEX.test(password)

    if (!userTest || !pwdTest) {
      setErrorMessage('Datos inválidos')
    }

    try {
      const data = { name, nickname: user, password }
      console.log(data)
      const response = registro(data)
      console.log(response?.data)
      console.log(response?.token)
      setSuccess(true)
      setName('')
      setUser('')
      setPassword('')
    } catch (error) {
      if (!error?.response) {
        setErrorMessage('El servidor no responde')
      } else if (error.response?.status === 409) {
        setErrorMessage('Ya hay un nombre de usuario')
      } else {
        setErrorMessage('No se ha podido registrar el usuario')
      }
      console.log(success)
    }
  }

  const privilegeData = () => {
    try {
      const data = getPrivilegio()
      setPrivilege(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    privilegeData()
  }, [])

  return (
    <section className={styles.container}>
      <p
        ref={errRef}
        className={errorMessage ? styles.errmsg : styles.offscreen}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <h1> Registrar Usuario</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="name"
          ref={userRef}
          required
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />

        <p
          id="uidnote"
          className={
            nameFocus && name
              ? styles.instructions
              : styles.offscreen
          }
        >
        </p>

        <label htmlFor="userName">
          Usuario:
          <span className={validUser ? styles.valid : styles.hide}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validUser || !name ? styles.hide : styles.invalid}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>

        <input
          type="text"
          id="userName"
          ref={userRef}
          autoComplete="off"
          required
          aria-invalid={validUser ? 'false' : 'true'}
          aria-describedby="uidnote"
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validUser
              ? styles.instructions
              : styles.offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          El nombre de usuario debe ser de <br />
          4 a 24 caracteres. <br />
          Debe comenzar con una letra <br />
        </p>

        <label htmlFor="password">
          Contraseña:
          <span className={validPassword ? styles.valid : styles.hide}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validPassword || !password ? styles.hide : styles.invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-invalid={validPassword ? 'false' : 'true'}
          aria-describedby="pwdnote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <p
          id="pwdnote"
          className={
            passwordFocus && !validPassword
              ? styles.instructions
              : styles.offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          La contraseña debe ser de <br />
          8 a 24 caracteres de longitud. <br />
          Deberá incluir mayusculas y minusculas,
          <br /> numeros y caracteres especiales. <br />
          Caracteres especiales admitidas: <br />{''}
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>{''}
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>{''}
          <span aria-label="percent">$</span>
        </p>

        <label htmlFor="confirmPassword">
          Confirmar Contraseña:
          <span
            className={validMatch && matchPassword ? styles.valid : styles.hide}
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validMatch || !matchPassword ? styles.hide : styles.invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>

        <input
          type="password"
          id="confirmPassword"
          onChange={(e) => setMatchPassword(e.target.value)}
          required
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describedby="confirmNote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />

        <p
          id="confirmNote"
          className={
            matchFocus && !validMatch ? styles.instructions : styles.offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          La contraseña debe coincidir
        </p>

        <label htmlFor="privilegio">Elige el privilegio:</label>
        <select id='privilegio'>
          {
            console.log(privilege)
          }
        </select>

        <button disabled={!validUser || !validPassword || !validMatch}>

          Registrar
        </button>
      </form>
    </section>
  )
}

export default Registrar
