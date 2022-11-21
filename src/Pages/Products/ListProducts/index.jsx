import React from 'react'

import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import SearchBar from '../../../Components/Searchbar';
import ItemCard from '../../../Components/ItemCard';

import BoloLaranja from '../../../assets/bolo-laranja-schar.png'
import PaoForma from '../../../assets/pao_forma_schar.jpg'
import BolachaOreo from '../../../assets/bolacha_oreo.jpg'

import styles from './listProducts.module.css'

export default function ListProducts() {
  const listProducts = [
    {
      cardTitle: 'Bolo de Laranja Schar',
      cardText: 'Pão de Laranja sem glúten da Schar, de tez macia e saborosa',
      image: BoloLaranja,
      loadProduct: 'bolo_laranja_schar',
      price: 42.00,
      weight: 400
    },
    {
      cardTitle: 'Bolacha Recheada Oreo',
      cardText: 'Bolacha recheada oreo com recheio de creme com gotas de chocolate',
      image: BolachaOreo,
      loadProduct: 'bolacha_oreo',
      price: 22.00,
      weight: 200
    },
    {
      cardTitle: 'Pão sem glúten Schar',
      cardText: 'Maravilhoso pão sem glúten da Schar, feito com a farinha mais pura e macia jamais vista',
      image: PaoForma,
      loadProduct: 'pao_forma_schar',
      price: 12.00,
      weight: 100
    }
  ]

  return (
    <div className={styles.listProducts}>
      <Header />

      <SearchBar />

      <ItemCard
        cardTitle={listProducts[0].cardTitle}
        cardText={listProducts[0].cardText}
        image={listProducts[0].image}
        redirect={listProducts[0].redirect}
        price={listProducts[0].price}
        weight={listProducts[0].weight}
      />

      <ItemCard
        cardTitle={listProducts[1].cardTitle}
        cardText={listProducts[1].cardText}
        image={listProducts[1].image}
        redirect={listProducts[1].redirect}
        price={listProducts[1].price}
        weight={listProducts[1].weight}
      />

      <ItemCard
        cardTitle={listProducts[2].cardTitle}
        cardText={listProducts[2].cardText}
        image={listProducts[2].image}
        redirect={listProducts[2].redirect}
        price={listProducts[2].price}
        weight={listProducts[2].weight}
      />

      <div className={styles.divSpace}/>

      <Footer />
    </div>
  )
}
