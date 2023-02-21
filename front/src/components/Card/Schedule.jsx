import axios from 'axios'
import React from 'react'
import styles from '../styleComponents/Schedule.module.scss'
export function Schedule () {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    axios.get('http://192.168.2.41:8000').then((res) => {
      setData(res.data[0])
      console.log(res.data)
    })
  }, [])

  if (!data) return null
  return (
    <div className={styles.scheduleContainer}>
      <h1>Inicia</h1>
      <div className={styles.hour}><h3>{data.timeInit}</h3></div>
      <h1>Termina</h1>
      <div className={styles.hour}><h3>{data.timeEnd}</h3></div>
      <div><h2>Primer Semestre</h2></div>
    </div>
  )
}
