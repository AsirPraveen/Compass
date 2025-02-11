import './products.css'
import {Link} from 'react-router-dom'

const Products = () => {
  return (
      <div className='container col-6 py-1 my-2'>
        <h2 className='my-4  pb-2 text-center'>Trending Products For You!</h2>
        <div className='card card1'>
            <Link to='/products'>
              <div className='card-header ca_ima ' >
              </div>
            </Link>
            <div className='card-body pb-5'>
                <h5 className='card-title'>Lifestyle Products</h5>
                <p className='card-text'>Delivery with in 24 hours</p>
                <Link to='/products'>
                <a href='' className='btn btn-primary'>Shop Now !!</a>
                </Link>
            </div>
        </div>
      </div>

  )
}

export default Products
