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
      loadProduct: 'bolo_laranja_schar'
    },
    {
      cardTitle: 'Bolacha Recheada Oreo',
      cardText: 'Bolacha recheada oreo com recheio de creme com gotas de chocolate',
      image: BolachaOreo,
      redirect: 'bolacha_oreo'
    },
    {
      cardTitle: 'Pão sem glúten Schar',
      cardText: 'Maravilhoso pão sem glúten da Schar, feito com a farinha mais pura e macia jamais vista',
      image: PaoForma,
      redirect: 'pao_forma_schar'
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
      />

      <ItemCard
        cardTitle={listProducts[1].cardTitle}
        cardText={listProducts[1].cardText}
        image={listProducts[1].image}
        redirect={listProducts[1].redirect}
      />

      <ItemCard
        cardTitle={listProducts[2].cardTitle}
        cardText={listProducts[2].cardText}
        image={listProducts[2].image}
        redirect={listProducts[2].redirect}
      />

      <div className={styles.divSpace}/>

      <Footer />
    </div>
  )
}
