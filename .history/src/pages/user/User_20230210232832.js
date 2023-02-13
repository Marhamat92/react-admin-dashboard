import React from 'react'
import './user.scss'
import { Link, useParams } from 'react-router-dom'


function User() {
  const { userId } = useParams()


  return (
    <div className='user' >
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'> </div>
        <div className='userUpdate'>
        </div>
      </div>
      )
}

      export default User