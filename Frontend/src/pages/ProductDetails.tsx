import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Product } from "../store/ProductStore";
import useProductStore from "../store/ProductStore";
import ProductDetailCard from "../components/ProductDetailCard/ProductDetailCard";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products, fetchProducts, loading } = useProductStore();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  useEffect(() => {
    const foundProduct = products.find(
      (pro) => slug ===
         pro.title.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "")
    );
    setProduct(foundProduct);
  }, [slug, products]);

  if (loading || !product) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h2 className='text-center text-success'>Fetching product! Please wait....</h2>
      </div>
    );
  }

  return (
    <div className='d-flex min-vh-50 flex-column'>
      <Header />
      <Navbar />
      <Breadcrumb />
      <ProductDetailCard product={product} />
      <Footer />
    </div> 
  );
};

export default ProductDetails;
