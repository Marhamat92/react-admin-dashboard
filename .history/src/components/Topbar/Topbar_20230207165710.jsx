import React from 'react'
import "./topbar.scss"
import { NotificationsNone } from '@mui/icons-material'

function Topbar() {
  return (
    <div className="topbar" >
       <div className='topbarWrapper' >
          <div className='topLeft' >
            <span className='logo'>DevDaddy</span>
          </div>
          <div className='topRight' >
             <div className='topbarIconContainer' >
               <NotificationsNone/>
                <span className='topIconBadge'>2</span>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Topbar