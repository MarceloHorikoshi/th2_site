import React from 'react'

import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Button from '../../Components/Button'
import TextInput from '../../Components/TextInput';

import "./forgot.module.css";

export default function ForgotPassword() {

  return (
    <div className='ForgotPassword'>
      <Header />

      <h1>Esqueci a Senha</h1>

      <p>Digite seu email para enviarmos um link de redefinição de senha</p>

      <TextInput
        text={'Digite seu email...'}
        value={'email'}
      />

      <Button text={'RECUPERAR SENHA'} />

      <Footer />
    </div>
  )
}
