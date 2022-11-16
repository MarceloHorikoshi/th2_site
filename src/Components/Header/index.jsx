import styles from './header.module.css'
import LogoImage from '../../assets/logo.png'
import MenuImage from '../../assets/ic_sanduiche_header.png'

export default function Header() {
  const redirectHome = () => {
    console.log('Redirect Home');
  }

  const openMenu = () => {
    console.log('Open Menu');
  }

  return (
    <div className={styles.header}>
      <img src={LogoImage} className={styles.logo} alt="Logo Th2" onClick={() => redirectHome()} />

      <img src={MenuImage} className={styles.menu} alt="Logo Th2" onClick={() => openMenu()} />
    </div>
  )
}
