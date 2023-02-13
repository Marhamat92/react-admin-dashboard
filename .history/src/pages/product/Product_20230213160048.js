import React from 'react'
import './product.scss'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div className='product' >
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
    </div>
  )
}

export default Product