import styles from '../styleComponents/Card.module.css'
import { Details } from './Details'
export function Card () {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.nameLab}>
        <h1>Laboratorio</h1>
      </div>
        <div className={styles.materiaName}>
          <h3>Materia</h3>
        </div>
        <Details />
      <h2>Carrera</h2>
    </div>
  )
}
