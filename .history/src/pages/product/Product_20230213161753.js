import React from 'react'
import './product.scss'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../data/productData'

function Product() {
  return (
    <div className='product' >
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop' >
        <div className="productTopLeft">
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className='productImg' src=" https://images.unsplash.com/photo-1610092018881-8b8b1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
            " alt="" />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom' >
      </div>
    </div>
  )
}

export default Product