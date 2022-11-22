import React from 'react'

import styles from './itemRequest.module.css'

export default function ItemRequest({ image, name, quantity, price }) {
  let qtd = quantity
  let subTotal = price

  function calculate() {
    // TODO
  }
  
  return (
    <div className={styles.card}>
      <div>
        <p>Imagem</p>
        <p>{name}</p>
      </div>

      <div>
        <button>+</button>
        <p>{qtd}</p>
        <button>-</button>
      </div>

      <p>R$ {price}</p>

      <p>R$ {subTotal}</p>
    </div>
  )
}
