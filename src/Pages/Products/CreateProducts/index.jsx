import React from 'react'

import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import TextInput from '../../../Components/TextInput'
import Button from '../../../Components/Button'

import styles from './createProducts.module.css'

export default function CreateProducts() {

  return (
    <div className={styles.createProducts}>
      <Header />

      <h1>Criar Produto</h1>

      <TextInput
        text={'Nome do Produto'}
        value={'productName'}
      />

      <TextInput
        text={'Preço'}
        value={'productPrice'}
      />

      <TextInput
        text={'Peso'}
        value={'productWeight'}
      />

      <TextInput
        text={'Quantidade'}
        value={'productQuantity'}
      />

      <TextInput
        text={'Descrição'}
        value={'productDescription'}
      />

      <TextInput
        text={'Marca/Fabricante'}
        value={'productBrand'}
      />

      <TextInput
        text={'Lista de Alergênicos (separado por vírgula)'}
        value={'productAllergyList'}
      />

      <TextInput
        text={'Data de Validade'}
        value={'productValidateDate'}
      />

      <TextInput
        text={'Código de Barras'}
        value={'productBarcode'}
      />

      <Button text={'CARREGAR IMAGEM'} />

      <Button text={'CADASTRAR PRODUTO'} />

      <Footer />
    </div>
  )
}
