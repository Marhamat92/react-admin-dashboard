import React from 'react'
import './sidebar.scss'
import { Analytics, LineStyle, TrendingUp } from '@mui/icons-material'

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
              <LineStyle />
              Home
            </li>
            <li className='sidebarListItem'>
              <Analytics />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar