import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import _ from "lodash";
import ProductCard from "../ProductCard/ProductCard";
import "/src/components/SearchComponent/search.css";
import useProductStore from "../../store/ProductStore";

const SearchComponent = () => {
  const {
    setProducts,
    searchTerm,
    setSearchTerm,
    selectedSort,
    setSelectedSort,
    selectedCategory,
    setSelectedCategory
  } = useProductStore();

  const [products1, setProducts1] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/categories");
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Debounced function to fetch products
  const fetchProducts1 = useCallback(
    _.debounce(async () => {
      setError("");
      setProducts1([]);
      try {
        let url = "https://dummyjson.com/products";

        if (searchTerm) {
          url = `https://dummyjson.com/products/search?q=${searchTerm}`;
        } else if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
        }

        const response = await axios.get(url);
        let fetchedProducts = response.data.products || response.data;

        // Apply Sorting
        if (selectedSort === "price") {
          fetchedProducts = fetchedProducts.sort((a:any, b:any) => a.price - b.price);
        } else if (selectedSort === "discount") {
          fetchedProducts = fetchedProducts.sort((a:any, b:any) => a.discountPercentage - b.discountPercentage);
        } else if (selectedSort === "rating") {
          fetchedProducts = fetchedProducts.sort((a:any, b:any) => b.rating - a.rating);
        }

        if (fetchedProducts.length > 0) {
          setProducts1(fetchedProducts);
          setProducts(fetchedProducts);
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("An error occurred while fetching the products.");
        console.error(err);
      }
    }, 1000),
    [searchTerm, selectedCategory, selectedSort]
  );

  // useEffect to trigger debounced fetchProducts
  useEffect(() => {
    fetchProducts1();
    return () => fetchProducts1.cancel();
  }, [fetchProducts1]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      {/* Search Bar */}
      <form className="w-50 mb-4" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success" type="button" onClick={() => setSearchTerm(searchTerm)}>
            Search
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className="d-flex mb-4">
        {/* Category Dropdown */}
        <select
          className="form-select me-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Filter by Category</option>
          {categories.map((cat:any, index:any) => (
            <option key={index} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          className="form-select"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="discount">Discount Percentage</option>
          <option value="rating">Rating</option>
        </select>
      </div> 

      {/* Empty State Video */}
      {products1.length === 0 && !error && (
        <div className="pb-3 mb-3">
          <video autoPlay loop muted className="empty-cart-video">
            <source src="/src/components/SearchComponent/empty-cart.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-danger">{error}</p>}

      {/* Product Cards */}
      <div className="d-flex justify-content-center flex-wrap p-1 g-1">
        {products1.map((product:any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
