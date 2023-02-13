import React, { useState } from 'react'
import './productList.scss'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteForeverTwoTone, DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productRows } from '../../data/productRows';

function ProductList() {


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product', headerName: 'Product', width: 150, renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteForeverTwoTone onClick={() => { removeProduct(params.row.id) }} className="productListDelete" />
          </>
        )
      }
    }
  ];


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