import React from 'react'
import LogoImage from '../../assets/logo.png'
import MenuImage from '../../assets/menu_options.png'

import styles from './footer.module.css'

export default function Footer() {
  const redirectHome = () => {
    console.log('Redirect Home');
  }

  const openMenu = () => {
    console.log('Open Menu');
  }

  return (
    <div className={styles.footer}>
      <img src={LogoImage} className={styles.logo} alt="Logo Th2" onClick={() => redirectHome()} />

      <p className={styles.text}>
        Th2 2022
        <br />
        Todos os direitos reservados
      </p>

      <div className={styles.option}>
        <img src={MenuImage} className={styles.menu} alt="Menu Options" onClick={() => openMenu()} />
        <div className={styles.optionText}>Opções</div>
      </div>
    </div>
  )
}
