import React from 'react'
import './productList.scss'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteForeverTwoTone, DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productRows } from '../../data/userRows';

function ProductList() {
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