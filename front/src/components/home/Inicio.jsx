import React from 'react'
import axios from 'axios'
import styles from '../styleComponents/Inicio.module.scss'
import { Card } from '../Card/Card'
import { Navbar } from './Navbar'
export function Inicio () {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    axios.get('http://192.168.2.41:8000').then((res) => {
      setData(res.data[0])
      console.log(res.data)
    })
  }, [])

  if (!data) return null

  return (
    <div>
      <Navbar />
      <div className={styles.containerInicio}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
