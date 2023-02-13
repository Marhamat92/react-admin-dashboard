import React from 'react'
import './user.scss'
import { Link, useParams } from 'react-router-dom'
import { PermIdentity } from '@mui/icons-material'


function User() {
  const { userId } = useParams()


  return (
    <div className='user' >
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' alt='' className='userShowImg' />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Anna Becker</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <PermIdentity className='userShowIcon' />
            <span className='userShowInfo'>annabeck99</span>
          </div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  )
}

export default User