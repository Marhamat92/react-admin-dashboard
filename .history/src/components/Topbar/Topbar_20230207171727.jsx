import React from 'react'
import "./topbar.scss"
import { Language, NotificationsNone, Settings } from '@mui/icons-material'

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
             <div className='topbarIconContainer' >
               <Language/>
                <span className='topIconBadge'>2</span>
             </div>
             <div className='topbarIconContainer' >
               <Settings/>
             </div>
             <img src='https://i.pinimg.com/originals/99/ee/d8/99eed8642bbb66a71d0f1677d18a2587.jpg' alt="jack sheperd" />
          </div>
       </div>
    </div>
  )
}

export default Topbar