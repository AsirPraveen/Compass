import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Products_list from "./pages/ProductsList"
import Product_details from "./pages/ProductDetails"
import SearchPage from "./pages/SearchPage"
import AddProducts from "./pages/AddProducts"
import './index.css'

 
function App() {  
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/products" element={<Products_list/>} />
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/search/:slug" element={<Product_details/>}/>
        <Route path='/addproducts' element={<AddProducts/>} />
      </Routes>
    </div>
  )

}

export default App
