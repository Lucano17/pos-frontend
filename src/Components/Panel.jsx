import React from 'react'
import styles from './Panel.module.css'

const Buttons = () => {
  return (
    <div className={styles.panel}>
      <section>
      <h1>Panel</h1>
      </section>

      <section className={styles.panelGrid}>
      <button className={styles.panelButton}>1</button>
      <button className={styles.panelButton}>2</button>
      <button className={styles.panelButton}>3</button>
      <button className={styles.panelButton}>4</button>
      <button className={styles.panelButton}>5</button>
      <button className={styles.panelButton}>6</button>
      <button className={styles.panelButton}>7</button>
      <button className={styles.panelButton}>8</button>
      <button className={styles.panelButton}>9</button>
      </section>
    </div>
  )
}

export default Buttons
