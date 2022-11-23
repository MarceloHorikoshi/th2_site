import React from 'react'

import Button from '../../Components/Button'

import styles from './orders.module.css'

export default function Orders({ number, date, status, payment, totalValue }) {
  return (
    <div>
      <div className={styles.line} />

      <div className={styles.body}>
        <p>#</p>
        <p>Data</p>
        <p>Status</p>
      </div>

      <div className={styles.body} style={{ color: (status === 'Cancelado') ? 'red' : 'green' }}>
        <p>{number}</p>
        <p>{date}</p>
        <p>{status}</p>
      </div>

      <div className={styles.body} style={{ marginTop: 20 }}>
        <Button text={'ACOMPANHAR'} />
        <div className={styles.teste}>
          <p>Método</p>
          <p style={{ color: (status === 'Cancelado') ? 'red' : 'green' }}>{payment}</p>
        </div>
        <div>
          <p>Valor Total</p>
          <p style={{ color: (status === 'Cancelado') ? 'red' : 'green' }}>R$ {totalValue}</p>
        </div>
      </div>
    </div>
  )
}
