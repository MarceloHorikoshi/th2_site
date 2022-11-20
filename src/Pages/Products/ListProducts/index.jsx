import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import SearchBar from '../../../Components/Searchbar';
import ItemCard from '../../../Components/ItemCard';

import "./listProducts.module.css";

export default function ListProducts() {

  return (
    <div className='ListProducts'>
      <Header />

      <SearchBar />

      <ItemCard />

      <Footer />
    </div>
  )
}
