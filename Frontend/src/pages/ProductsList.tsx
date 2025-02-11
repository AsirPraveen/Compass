import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowProducts from '../components/ShowProducts/ShowProducts'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const ProductsList = () => {
  return (
    <div className='d-flex min-vh-100 flex-column'>
        <Header/>
        <Navbar/>
        <Breadcrumb/>
        <ShowProducts/>
        <Footer/>
    </div>
  )
}

export default ProductsList
