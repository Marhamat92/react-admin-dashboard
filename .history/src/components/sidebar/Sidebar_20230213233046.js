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
    console.log(currentPath)
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
            {links.map((link, index) => {
              return (
                <Link to={link.path} key={index} className={link.cName}>
                  <li className='sidebarListItem' onClick={() => setActive(!active)}>
                    {link.icon}
                    {link.title}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar