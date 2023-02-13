import React, { useState } from 'react'
import './productList.scss'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteForeverTwoTone, DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productRows } from '../../data/productRows';

function ProductList() {

  const [data, setData] = useState(productRows)


  const removeProduct = (id) => {
    setData(data.filter((item) => item.id !== id))
  }


  return (
    <div className='productList' >
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList