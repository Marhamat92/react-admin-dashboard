import React from 'react'
import './user.scss'
import { Link, useParams } from 'react-router-dom'


function User() {
  const { userId } = useParams()


  return (
    <div className='user' >User  {userId} </div>
  )
}

export default User