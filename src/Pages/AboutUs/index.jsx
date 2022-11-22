import React from 'react'

import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

import "./aboutUs.module.css"

export default function AboutUs() {

  return (
    <div>
      <Header />

      <h1>Sobre Nós</h1>

      <p>
        Atualmente, alergias alimentares está entre os principais problemas enfrentados por diversas pessoas ao redor do mundo, segundo a Comissão do Codex Alimentarius, um órgão da Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) e da Organização Mundial da Saúde (OMS), estima que 10% da população de países desenvolvidos sofre com algum tipo de alergia alimentar e infelizmente esta estatística vem crescendo nos últimos anos.
        O Th2 surgiu com a ideia de ajudar as pessoas obterem produtos, receitas e encontrarem lugares para que possam realizar suas refeições sem medo de desenvolverem reações alérgicas.
      </p>

      <Footer />

    </div>
  )
}
