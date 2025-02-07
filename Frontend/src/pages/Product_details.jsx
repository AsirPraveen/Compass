import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Spinner } from "react-bootstrap";
import Star from "../components/Star/Star";
import { useParams } from "react-router-dom";

import useProductStore from "../store/productStore";

const Product_details = () => {
  const { slug } = useParams();
  const { products, fetchProducts, loading } = useProductStore();
  const [product, setProduct] = useState(null);

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
      <div style={{ height: "100%" }} className="container mt-4">
        <div className="row p-4 bg-light rounded shadow">
          <div className="col-md-5 text-center">
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid rounded shadow mb-2 bg-success bg-gradient "
            />
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
            {product.meta?.qrCode && (
              <div className="col-12 p-3 m-2">
                <h3 className="mt-2">Scan QR Code</h3>
                <img
                  src={product.meta.qrCode}
                  alt="QR Code"
                  className="img-fluid mt-1"
                  style={{ maxWidth: "100px" }}
                />
              </div>
            )}
          </div>
          <div className="col-md-7 bg-white bg-gradient shadow rounded">
            <h1 className="display-6 fw-bold text-center pt-1">{product.title}</h1>
            <p className="text-muted">{product.description}</p>
            <ul className="list-group mb-3">
              <li className="list-group-item">
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </li>
              {product.discountPercentage && (
                <li className="list-group-item">
                  <strong>Discount:</strong> {product.discountPercentage}%
                </li>
              )}
              <li className=" list-group-item d-flex">
                <strong>Rating: </strong>&nbsp;
                <Star stars={product.rating} />
              </li>
              <li className="list-group-item">
                <strong>Stock:</strong> {product.stock} units
              </li>
              <li className="list-group-item">
                <strong>Brand:</strong> {product.brand}
              </li>
              <li className="list-group-item">
                <strong>Category:</strong> {product.category}
              </li>
              <li className="list-group-item">
                <strong>SKU:</strong> {product.sku}
              </li>
              <li className="list-group-item">
                <strong>Weight:</strong> {product.weight} kg
              </li>
              <li className="list-group-item">
                <strong>Warranty:</strong> {product.warrantyInformation}
              </li>
              <li className="list-group-item">
                <strong>Shipping:</strong> {product.shippingInformation}
              </li>
              <li className="list-group-item">
                <strong>Return Policy:</strong> {product.returnPolicy}
              </li>
              <li className="list-group-item">
                <strong>Availability:</strong> {product.availabilityStatus}
              </li>
            </ul>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-12">
            <h2 className="fw-bold">Customer Reviews</h2>
            {product.reviews?.length > 0 ? (
              <div className="list-group">
                {product.reviews.map((review, index) => (
                  <div key={index} className="list-group-item list-group-item-action">
                    <h5 className="fw-bold">{review.reviewerName}</h5>
                    <p className="card-text d-flex">
                      <strong>Rating: </strong>&nbsp;
                      <Star stars={review.rating} />
                    </p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product_details;
