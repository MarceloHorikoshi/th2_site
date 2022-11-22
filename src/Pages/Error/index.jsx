import React from 'react'

import ErrorImage from '../../assets/error.png'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

import "./error.module.css"

export default function Error() {

  return (
    <div>
      <Header />

      <div style={{display: 'flex', flexDirection: 'row'}}>
        <img src={ErrorImage} alt="Error" style={{width: '100px', height: '100px',  margin: '20px'}}/>
        <h1>Ops... Um erro inesperado ocorreu</h1>
      </div>

      <p>
        Por favor, tente novamente mais tarde. Caso o erro persista, entre em contato
        com o nosso suporte
      </p>

      <Footer />

    </div>
  )
}
