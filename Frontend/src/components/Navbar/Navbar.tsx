import React from 'react';
import compass from '../../../src/assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-gradient-success bg-light border border-dark rounded-bottom">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="#">
        <Link to="/" className='text-decoration-none text-dark'>
          <img src={compass} alt="Shopcart" width="30" height="24" className="d-inline-block align-text-top pe-1 pt-1" />
          <strong>Compass</strong>
          </Link> 
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Electronics</a></li>
                <li><a className="dropdown-item" href="#">Fashion</a></li>
                <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-bottom" href="#">What's New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Delivery</a>
            </li>
          </ul>
          <div className="d-flex px-4">
            <Link to='/search'>
              <button className="btn btn-outline-success" type="button">Search & Explore</button>
            </Link>
          </div>
          <div className="d-flex">
            <Link to='/addproducts'>
              <button className="btn btn-outline-success" type="button">Add Product</button>
            </Link>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-cart"></i> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </React.Fragment>
  );
};

export default Navbar;
