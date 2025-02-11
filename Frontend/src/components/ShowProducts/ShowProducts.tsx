

import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Spinner, Pagination } from "react-bootstrap";
import useProductStore from "../../store/ProductStore";

const Show_products = () => {

  const { products, fetchProducts, loading, setSelectedCategory, setSearchTerm} = useProductStore()
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

    useEffect(() => {
        setSearchTerm('');
        setSelectedCategory('');
        fetchProducts();
    }, []);


  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


  const handlePageChange = (pageNumber:any) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginationItems = [
    <Pagination.First
      key="first"
      onClick={() => handlePageChange(1)}
      disabled={currentPage === 1}
    />,
    <Pagination.Prev
      key="prev"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    />,
    ...[...Array(totalPages)].map((_, index) => (
      <Pagination.Item
        key={index + 1}
        active={index + 1 === currentPage}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </Pagination.Item>
    )),
    <Pagination.Next
      key="next"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    />,
    <Pagination.Last
      key="last"
      onClick={() => handlePageChange(totalPages)}
      disabled={currentPage === totalPages}
    />,
  ];

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h2 className="text-center text-success">Fetching products! Please wait....</h2>
      </div>
    );
  }

  return (
    <div>
      {products.length > 0 && (
        <h1 className="text-center pt-3">
          <strong>Lifestyle Products</strong>
        </h1>
      )}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>{paginationItems}</Pagination>
      </div>
      <div className="d-flex justify-content-center flex-wrap p-1 g-1">
        {currentProducts.map((product) => (
          
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Show_products;
