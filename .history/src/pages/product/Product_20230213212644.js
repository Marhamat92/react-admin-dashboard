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
            <img className='productInfoImg' src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632861342000 " alt="" />
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
        <form className='productForm'>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Apple Airpods' />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img className='productUploadImg' src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632861342000 " alt="" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product