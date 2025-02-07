import React from 'react'
import Navbar from '../components/navbar/navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Show_products from '../components/Show_products/Show_products'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const Products_list = () => {
  return (
    <div className='d-flex min-vh-100 flex-column'>
        <Header/>
        <Navbar/>
        <Breadcrumb/>
        <Show_products/>
        <Footer/>
    </div>
  )
}

export default Products_list
