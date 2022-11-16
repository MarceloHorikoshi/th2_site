import styles from './footer.module.css'
import LogoImage from '../../assets/logo.png'
import MenuImage from '../../assets/menu_options.png'

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

      <img src={MenuImage} className={styles.menu} alt="Logo Th2" onClick={() => openMenu()} />
    </div>
  )
}
