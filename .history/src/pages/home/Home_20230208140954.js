import React from 'react'
import './home.scss'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../data'

function Home() {
  return (
    <div className='home' >
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} dataKey="Active User" />
    </div>
  )
}

export default Home