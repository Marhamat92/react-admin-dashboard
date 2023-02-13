import React from 'react'
import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
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
];

const rows = [
  { id: 1, username: 'Jhon Snow', avatar: 'https://images.unsplash.com/photo-1627335050929-6b8b5b5e6f0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', email: "hon@gmail.com", status: "active", transaction: "$120.00" },

];

function UserList() {
  return (
    <div className='userList' >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /></div>
  )
}

export default UserList