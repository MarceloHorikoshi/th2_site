import React from 'react'

import styles from './itemCard.module.css'

export default function ItemCard({ cardTitle, cardText, image, loadProduct, price, weight }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.cardImage} alt="Product"/>
      <div>
        <div className={styles.cardTitle}>{cardTitle}</div>
        <div className={styles.priceWeight}>
          <div className={styles.price}>
            R$ {price} 
          </div>
          <div className={styles.weight}>
            - {weight} g
          </div>
        </div>
        <div className={styles.cardText}>{cardText}</div>
      </div>
    </div>
  )
}
