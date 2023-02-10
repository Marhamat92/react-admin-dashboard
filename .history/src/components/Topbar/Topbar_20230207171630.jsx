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
             <img src='https://static.wikia.nocookie.net/lostpedia/images/1/1c/Jack-jack-shep.jpg/revision/latest?cb=20200425031646' alt="jack sheperd" />
          </div>
       </div>
    </div>
  )
}

export default Topbar