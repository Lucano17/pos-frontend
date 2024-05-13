import React from 'react'
import styles from './CheckIn.module.css'

const SideButtons = () => {
  return (
    <div className={styles.checkIn}>
      <button id={styles.ticketButton} className={styles.checkInButtons}>TICKET</button>
      <button id={styles.billButton} className={styles.checkInButtons}>FACTURAR</button>
      <button id={styles.cancelButton} className={styles.checkInButtons}>CANCELAR</button>
    </div>
  )
}

export default SideButtons
