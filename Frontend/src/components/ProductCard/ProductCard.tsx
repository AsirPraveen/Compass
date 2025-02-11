import { Link } from "react-router-dom";
import Star from "../Star/Star";
import "/src/components/ProductCard/product-card.css";
import { Product } from "../../store/ProductStore"; 

interface ProductCardProps {
  product: Product;
}
 
const ProductCard = ({ product }: ProductCardProps) => {
  const {
    title,
    price,
    discountPercentage,
    rating,
    thumbnail,
  } = product;

  const createSlug = (title: string) => title.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <div className="main">
      <div className="cont">
        <div className="card__cont">
          <article className="card__art">
            <img src={thumbnail} alt="image" className="card__img bg-success bg-gradient" />
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
                  <Star stars={rating} />
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
