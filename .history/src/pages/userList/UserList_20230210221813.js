import React from 'react'
import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForeverTwoTone, DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'username', headerName: 'Username', width: 130, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }
  },
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
  {
    field: 'action',
    headerName: 'Action',
    width: 90,
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

const rows = [
  { id: 1, username: 'Jhon Snow', avatar: 'https://hips.hearstapps.com/hmg-prod/images/kit-harington-as-jon-snow-in-game-of-thrones-season-7-1548376210.jpeg?crop=0.500xw:1.00xh;0.362xw,0&resize=1200:*', email: "hon@gmail.com", status: "active", transaction: "$180.00" },
  {
    id: 2, username: 'Ned Stark', avatar: 'https://i.pinimg.com/originals/72/1d/6a/721d6a00a561c71658df41ad9a26d71c.jpg', email: "stark@gmail.com", status: "active", transaction: "$160.00"
  },
  {
    id: 3, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 4, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 5, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 6, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 7, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 8, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 8, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 9, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 10, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 11, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 12, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 13, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },
  {
    id: 14, username: 'khaleesi Stark', avatar: 'https://i.guim.co.uk/img/media/02f5315a3ddd09325377357e22f052a9a6759e1e/0_249_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a5fddd8bda9970a44cbb03b0dd0771a8', email: "hello@gmail.com", status: "active", transaction: "$190.00"
  },


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