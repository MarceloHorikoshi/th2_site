import React, { useState } from 'react'

import styles from './itemRequest.module.css'

export default function ItemRequest({ image, name, quantity, price }) {
  const [qtd, setQtd] = useState(quantity)
  const [subTotal, setSubTotal] = useState(price)

  return (
    <div>
      <div className={styles.line} />

      <div className={styles.lineItem}>
        <div className={styles.titleImage}>
          <img src={image} className={styles.item} alt="Item" />
          <p>{name}</p>
        </div>

        <div className={styles.buttonResize}>
          <button onClick={qtd < 99 ? () => setQtd(qtd + 1) : null}>+</button>
          <p>{qtd}</p>
          <button onClick={qtd > 0 ? () => setQtd(qtd - 1) : null}>-</button>
        </div>

        <p>R$ {price}</p>

        <p>R$ {subTotal}</p>
      </div>

    </div>
  )
}
