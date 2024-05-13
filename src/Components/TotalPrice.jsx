import React from 'react'
import styles from './TotalPrice.module.css'
import products from '../Objects/products.json'

const totalPrice = products.reduce ((acc,item) => acc + item.price, 0);

const TotalPrice = () => {
  return (
    <div className={styles.totalPrice}>
      <h1>PRECIO TOTAL: ${totalPrice}
        {/* función que sume todos los precios
        mostrados en ItemsAdded */}
      </h1>
    </div>
  )
}

export default TotalPrice
