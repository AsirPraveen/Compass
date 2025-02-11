import './hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active c-item" data-bs-interval="5000">
          <img className="d-block w-100 c-img" src="/src/components/Hero/6.jpg" alt="First slide"/>
          <div className="carousel-caption top-0 mt-4 text-white-emphasis">
            <p className='mt-5 fs-3 text-uppercase bordered-textp'>Fast, easy, and just a tap away</p>
            <h1 className='display-1 fw-bolder text-capitalize bordered-text'>Shopping And Department Store</h1>
            <Link to='/search'>
            <button className="btn btn-info px-4 py-2 fs-5 mt-5">Explore</button>
            </Link> 
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="4000">
          <img className="d-block w-100 c-img" src="/src/components/Hero/3.png" alt="Second slide"/>
          <div className="carousel-caption top-0 mt-4 text-danger-emphasis">
            <p className='mt-5 fs-3 text-uppercase bordered-textp'>Fast, easy, and just a tap away</p>
            <h1 className='display-1 fw-bolder text-capitalize bordered-text'>Shop smarter, not harder</h1>
            <Link to='/products'>
            <button className="btn btn-info px-4 py-2 fs-5 mt-5">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="4000">
          <img className="d-block w-100 c-img" src="/src/components/Hero/9.jpg" alt="Third slide"/>
          <div className="carousel-caption top-0 mt-4 text-success-emphasis">
            <p className='mt-5 fs-3 text-uppercase bordered-textp'>Fast, easy, and just a tap away</p>
            <h1 className='display-1 fw-bolder text-capitalize bordered-text'>Why wait in line? Shop online!</h1>
            <Link to='/search'>
            <button className="btn btn-info px-4 py-2 fs-5 mt-5">Explore</button>
            </Link>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
