import React from 'react'
import './user.scss'
import { Link, useParams } from 'react-router-dom'
import { CalendarToday, LocationSearching, MailLockOutlined, PermIdentity, PhoneAndroid } from '@mui/icons-material'


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
            <div className='userShowInfo' >
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>annabeck99</span>
            </div>
            <div className='userShowInfo' >
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>10.12.1989</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo' >
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+1 54359047509</span>
            </div>
            <div className='userShowInfo' >
              <MailLockOutlined className='userShowIcon' />
              <span className='userShowInfoTitle'>annabeck99@gmail.com</span>
            </div>
            <div className='userShowInfo' >
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>New York, USA</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label >Username</label>
                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Full Name</label>
                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Email</label>
                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Phone</label>
                <input type="text" placeholder="+1 54359047509" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Address</label>
                <input type="text" placeholder="New York, USA" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight"></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User