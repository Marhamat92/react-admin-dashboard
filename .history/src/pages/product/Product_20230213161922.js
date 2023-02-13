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
            <img className='productImg' src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632861342000 " alt="" />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className="productInfoItem">
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>3245</span>
            </div>
            <div className="productInfoItem">
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className="productInfoItem">
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
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