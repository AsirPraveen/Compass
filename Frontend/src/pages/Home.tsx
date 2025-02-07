
import Header from '../components/Header/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const Home = () => {
  return (
    <div className='d-flex min-vh-100 flex-column'>

        <Header/>
        <Navbar/>
        <Breadcrumb/>
        <Hero/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default Home