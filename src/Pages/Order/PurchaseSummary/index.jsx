import React from 'react'

import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import Orders from '../../../Components/Orders'

import './purchaseSummary.module.css'

export default function PurchaseSummary() {
  const ordersList = [
    {
      number: 123412,
      date: '10/02/2022',
      status: 'Entregue',
      payment: 'PIX',
      totalValue: 212.65
    },
    {
      number: 123413,
      date: '15/10/2022',
      status: 'Cancelado',
      payment: 'Boleto',
      totalValue: 710.23
    }
  ]

  return (
    <div>
      <Header />

      <h1>Meus Pedidos</h1>

      <Orders
        number={ordersList[0].number}
        date={ordersList[0].date}
        status={ordersList[0].status}
        payment={ordersList[0].payment}
        totalValue={ordersList[0].totalValue}
      />

      <Orders
        number={ordersList[1].number}
        date={ordersList[1].date}
        status={ordersList[1].status}
        payment={ordersList[1].payment}
        totalValue={ordersList[1].totalValue}
      />

      <Footer />
    </div>
  )
}
