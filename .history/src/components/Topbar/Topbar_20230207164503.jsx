import React from 'react'
import "./topbar.scss"

function Topbar() {
  return (
    <div className="topbar" >
       <div className='topbarWrapper' >
          <div className='topLeft' >
            <span className='logo'>DevDaddy</span>
          </div>
          <div className='topRight' >right</div>
       </div>
    </div>
  )
}

export default Topbar