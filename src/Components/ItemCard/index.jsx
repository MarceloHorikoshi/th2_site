import React from 'react'

import styles from './itemCard.module.css'

export default function ItemCard({ cardTitle, cardText, image, loadProduct }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.cardImage} alt="Product"/>
      <div>
        <div>{cardTitle}</div>
        <div>{cardText}</div>
      </div>
    </div>
  )
}
