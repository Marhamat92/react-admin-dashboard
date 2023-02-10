import React from 'react'
import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <div className='sidebarTitle'>
            Dashboard
          </div>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              Home
            </li>
            <li className='sidebarListItem'>
              Analytics
            </li>
            <li className='sidebarListItem'>
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar