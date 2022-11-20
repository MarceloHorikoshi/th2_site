import styles from "./searchbar.module.css";
import SearchIcon from '../../assets/ic_lupa_header.png'

export default function SearchBar() {
  const search = () => {
    console.log('Search');
  }

  return (
    <div className={styles.searchbar}>

      <div className={styles.placeholder}>
        Pesquisar...
      </div>

      <img src={SearchIcon} className={styles.icon} alt="Search Icon" onClick={() => search()} />

    </div>
  )
}
