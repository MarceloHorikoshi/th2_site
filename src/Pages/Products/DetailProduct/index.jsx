import React from 'react'

import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import Button from '../../../Components/Button'

import PaoForma from '../../../assets/pao_forma_schar.jpg'
import styles from "./detailProduct.module.css"

export default function DetailProduct() {
  const product = {
    productName: 'Bolo de Laranja Schar',
    productDescription: 'Se você busca uma opção de pão macio e sem glúten, este é uma ótima escolha. A Schär é uma empresa especializada em alimentos sem glúten e por isso traz opções diversas para o mercado. O pão de forma Tradicional sem glúten está entre essas opções, e oferece diversos benefícios pois é feito com fibra de psyllium, não possui adição de trigo, leite, ovos e nem conservantes. Você pode consumir como café da manhã, ou da tarde e fazer lanches recheados com manteiga, ricota, patês e saladas. Não contem glúten e lactose. ALÉRGICOS: pode conter derivados de soja.',
    productImage: PaoForma,
    productPrice: 42.00,
    productWeight: 400,
    productQuantity: 3,
    productBrand: 'Schar',
    productIngredientsList: 'Farinha, Água, Leite em Pó, Fermento Biológico, Ovo, Sal e Amendôas em pedaços',
    productAllergiesList: 'Leite, Lactose e Amendôa',
    productValidateDate: '10/10/2023',
    productBarcode: '10121032759',
    productCreatedBy: 'Guilherme Augusto'
  }

  return (
    <div>
      <Header />

      <h1>Termos de Uso</h1>

      <img src={product.productImage} alt="Product" />

      <div className={styles.inline}>
        <div className={styles.inlinePrice}>
          <p className={styles.price}>R$ {product.productPrice},00</p>
          <p className={styles.weight}>{product.productWeight} g</p>
        </div>
        <select name="select">
          <option value="valor1" selected>0</option>
          <option value="valor2">1</option>
          <option value="valor3">2</option>
          <option value="valor4">3</option>
        </select>
        <p>
          <Button text={'COMPRAR AGORA'} />
        </p>
      </div>

      <h2>Descrição</h2>
      <div className={styles.description}>{product.productDescription}</div>

      <h2>Dados Adicionais</h2>

      <div className={styles.inlineDescription}>
        <h3>Marca/Fabricante:</h3>
        <p>{product.productBrand}</p>
      </div>

      <div className={styles.inlineDescription}>
        <h3>Lista de Ingredientes:</h3>
        <p>{product.productIngredientsList}</p>
      </div>

      <div className={styles.inlineDescription}>
        <h3>Lista de Alergênicos:</h3>
        <p>{product.productAllergiesList}</p>
      </div>

      <div className={styles.inlineDescription}>
        <h3>Data de Validade:</h3>
        <p>{product.productValidateDate}</p>
      </div>

      <div className={styles.inlineDescription}>
        <h3>Código de Barras:</h3>
        <p>{product.productBarcode}</p>
      </div>

      <div className={styles.inlineDescription}>
        <h3>Cadastrado Por:</h3>
        <p>{product.productCreatedBy}</p>
      </div>

      <div className={styles.footer} />

      <Footer />
    </div>
  )
}
