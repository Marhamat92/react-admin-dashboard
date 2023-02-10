import React from 'react'
import './home.scss'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'

function Home() {
  return (
    <div className='home' >
      <FeaturedInfo />
      <Chart />
    </div>
  )
}

export default Home