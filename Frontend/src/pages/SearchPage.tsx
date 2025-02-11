import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import SearchComponent from '../components/SearchComponent/SearchComponent'

const SearchPage = () => {
  return (
    <div className='d-flex min-vh-100 flex-column'>
      <Header/>
        <Navbar/>
        <Breadcrumb/>
        <SearchComponent/>
        <Footer/>
    </div>
  )
}

export default SearchPage
