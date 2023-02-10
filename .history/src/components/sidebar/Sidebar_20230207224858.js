import React from 'react'
import './sidebar.scss'
import { Analytics, AttachMoney, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import { BarChart } from 'recharts'

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
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarListItem'>
              <Analytics className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
      </div>

      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <div className='sidebarTitle'>
            Quick Menu
          </div>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <PermIdentity className='sidebarIcon' />
              Users
            </li>
            <li className='sidebarListItem'>
              <Storefront className='sidebarIcon' />
              Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>

      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <div className='sidebarTitle'>
            Notifications
          </div>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>

      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <div className='sidebarTitle'>
            Staff
          </div>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <AssessmentIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar