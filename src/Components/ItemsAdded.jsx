import React from 'react'
import styles from './ItemsAdded.module.css'
import products from '../Objects/products.json'

const ItemsAdded = () => {
  return (
    <div className={styles.itemsAdded}>
      <h2>Items:</h2>
      <ul>
      
        {products.map(item=>(
          <li key={item.id}>
            <p> {item.name}: <span>${item.price}</span> </p>
        </li>
        ))}
      </ul>
        
          
        
    </div>
    
  )
}

export default ItemsAdded
