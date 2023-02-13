import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Analytics, AttachMoney, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline, BarChart } from '@mui/icons-material'
import { Link } from 'react-router-dom'



function Sidebar() {

  const [active, setActive] = useState(false)

  //change  the active state to true when the user clicks on the sidebar and change it to false when the user clicks on the sidebar again


  const links = [
    {
      title: 'Home',
      path: '/',
      icon: <LineStyle className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Analytics',
      path: '/analytics',
      icon: <Analytics className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Sales',
      path: '/sales',
      icon: <TrendingUp className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Users',
      path: '/users',
      icon: <PermIdentity className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Products',
      path: '/products',
      icon: <Storefront className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Transactions',
      path: '/transactions',
      icon: <AttachMoney className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <BarChart className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Mail',
      path: '/mail',
      icon: <MailOutline className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Feedback',
      path: '/feedback',
      icon: <DynamicFeed className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <ChatBubbleOutline className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Manage',
      path: '/manage',
      icon: <WorkOutline className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Analytics',
      path: '/analytics',
      icon: <Timeline className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <Report className='sidebarIcon' />,
      cName: 'sidebarListItem'
    },
  ]

  //find which link is active and add the active class to it
  useEffect(() => {
    const currentPath = window.location.pathname
    links.forEach((link) => {
      if (link.path === currentPath) {
        link.cName = 'sidebarListItem active'
      }
    })
  }, [links])





  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <div className='sidebarTitle'>
            Dashboard
          </div>
          <ul className='sidebarList'>
            <Link className="link" to="/" >
              <li className="sidebarListItem">
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>
            <Link to="/analytics" className='link'>
              <li className='sidebarListItem'>
                <Analytics className='sidebarIcon' />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className='link'>
              <li className='sidebarListItem'>
                <TrendingUp className='sidebarIcon' />
                Sales
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <div className='sidebarTitle'>
            Quick Menu
          </div>
          <ul className='sidebarList'>
            <Link to="/users" className='link' >
              <li className='sidebarListItem active'>
                <PermIdentity className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to="/products" className='link' >
              <li className='sidebarListItem'>
                <Storefront className='sidebarIcon' />
                Products
              </li>
            </Link>
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
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar