import React from 'react'

import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import Button from '../../../Components/Button'
import TextInput from '../../../Components/TextInput'
import ItemCart from '../../../Components/ItemCart'

import BoloLaranja from '../../../assets/bolo-laranja-schar.png'
import PaoForma from '../../../assets/pao_forma_schar.jpg'

import styles from './cart.module.css'

export default function Cart() {
  const listItens = [
    {
      image: PaoForma,
      name: 'Farinha sem glúten Schar 400g',
      quantity: 2,
      price: 12.23,
      shippingTax: 5.23
    },
    {
      image: BoloLaranja,
      name: 'Bolo de Laranja Schar',
      quantity: 4,
      price: 19.00,
      shippingTax: 4.2
    }
  ]
  let subTotal = 0
  let shipTotal = 0
  let total = 0

  calculate()

  function calculate() {
    listItens.forEach((item) => {
      subTotal += item.price
      shipTotal += item.shippingTax
    })

    total = subTotal + shipTotal
  }

  return (
    <div className='ForgotPassword'>
      <Header />

      <div className={styles.header}>
        <p>Imagem</p>
        <h1>Carrinho de Compras</h1>
      </div>

      <div className={styles.title}>
        <h2>Descrição</h2>
        <h2>Qtd</h2>
        <h2>Preço</h2>
        <h2>Subtotal</h2>
      </div>

      <ItemCart
        image={listItens[0].image}
        name={listItens[0].name}
        quantity={listItens[0].quantity}
        price={listItens[0].price}
      />

      <ItemCart
        image={listItens[1].image}
        name={listItens[1].name}
        quantity={listItens[1].quantity}
        price={listItens[1].price}
      />

      <div className={styles.bottomGroup}>
        <div className={styles.inputs}>
          <p>Cupom de desconto:</p>
          <TextInput
            text={'Cupom de desconto'}
            value={'cupom'}
          />
          <p>Frete:</p>
          <TextInput
            text={'CEP'}
            value={'cep'}
          />
        </div>
        <div className={styles.bottomTitle}>
          <p>Subtotal</p>
          <p>Correios</p>
          <h2>Total</h2>
        </div>
        <div className={styles.bottomPrice}>
          <p>Resumo</p>
          <p>{subTotal}</p>
          <p>{shipTotal}</p>
          <h2>{total}</h2>
        </div>
      </div>

      <Button text={'FINALIZAR COMPRA'} />

      <Footer />
    </div>
  )
}
