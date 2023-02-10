import styles from '../styleComponents/Inicio.module.css'
import { Card } from './Card'
export function Inicio () {
  return (
    <div className={styles.containerInicio}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
