import React from 'react'

import Button from '../../../Components/Button'

import styles from './orders.module.css'

export default function Orders({ number, date, status, payment, totalValue }) {
  return (
    <div>
      <div className={styles.line} />

      <div className={styles.titleUp}>
        <p>#</p>
        <p>Data</p>
        <p>Status</p>
      </div>

      <div className={styles.bodyUp} style={{ backgroundColor: (status === 'Cancelado') ? 'red' : 'green' }}>
        <p>{number}</p>
        <p>{date}</p>
        <p>{status}</p>
      </div>

      <div className={styles.lineDown}>
        <Button text={'ACOMPANHAR'} />
        <div className={styles.titleDown}>
          <p>Método</p>
          <p>Valor Total</p>
        </div>
        <div className={styles.bodyDown}>
          <p>{payment}</p>
          <p>R$ {totalValue}</p>
        </div>
      </div>
    </div>
  )
}
