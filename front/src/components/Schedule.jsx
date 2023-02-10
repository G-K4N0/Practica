import styles from '../styleComponents/Schedule.module.css'
export function Schedule () {
  return (
    <div className={styles.scheduleContainer}>
      <h1>Inicia</h1>
      <div className={styles.hour}><h3>08:00 am</h3></div>
      <h1>Termina</h1>
      <div className={styles.hour}><h3>09:00 am</h3></div>
      <div><h2>Primer Semestre</h2></div>
    </div>
  )
}
