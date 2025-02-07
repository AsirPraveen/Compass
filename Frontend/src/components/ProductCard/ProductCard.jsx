import React from "react";
import { Link } from "react-router-dom";
import Star from "../Star/Star";
import "/src/components/ProductCard/product_card.css"

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating, 
    thumbnail,
  } = product;

  const createSlug = (title) => title.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
  
  return (
    // <div key={id} className="card m-4 shadow col-3 p-2 ">
    //   <Link to={`/products/${createSlug(title)}`}>
    //     <img src={thumbnail} className="card-img-top bg-success bg-gradient " alt={`${title}`} />
    //   </Link>

    //   <hr/>
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>

    //     {/* <p className="card-text">{description}</p> */}

    //     <p className="card-text">
    //       <strong>Price:</strong> ${price}{" "}
    //       {discountPercentage && (
    //         <small className="text-muted">
    //           (-{discountPercentage}%)
    //         </small>
    //       )}
    //     </p>
        
    //     <p className="card-text d-flex">
    //       <strong>Rating: </strong>&nbsp;
    //       <Star stars={rating}/>
    //     </p>
        
    //     <div className="d-flex justify-content-between">

    //         <button className="btn btn-primary">Add to Cart</button>
            
    //         <Link to={`/products/${createSlug(title)}`} className="btn btn-secondary">
    //             View Details
    //         </Link>

    //     </div>
    //   </div>
    // </div>
    <div className="main">
    <div className="cont">
      <div className="card__cont">
        <article className="card__art">
          <img src={thumbnail} alt="image" className="card__img bg-success bg-gradient"/>
          <div className="card__data">
          <h2 className="card__title">{title}</h2>
            <span className="card__des">
              <strong>Price:</strong> ${price}{" "}
              {discountPercentage && (
                <small className="text-muted">
                  (-{discountPercentage}%)
                </small>
              )}
              <p className="card-text d-flex align-items-center justify-content-center">
                <strong>Rating: </strong>&nbsp;
                <Star stars={rating}/>
              </p>
            </span>
              <Link to={`/search/${createSlug(title)}`} className="btn btn-success">
                View Details
             </Link>
          </div>
        </article>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
