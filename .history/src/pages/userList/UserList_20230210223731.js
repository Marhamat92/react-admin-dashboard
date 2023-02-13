import React from 'react'
import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForeverTwoTone, DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'username', headerName: 'Username', width: 150, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }
  },
  { field: 'email', headerName: 'Email', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 140,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteForeverTwoTone className="userListDelete" />
        </>
      )
    }
  }
];


function UserList() {
  return (
    <div className='userList' >
      <DataGrid
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /></div>
  )
}

export default UserList