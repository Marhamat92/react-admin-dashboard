import React from 'react'
import './home.scss'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../data/userData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

function Home() {
  return (
    <div className='home' >
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} dataKey="Active User" grid />
      <div className='homeWidgets' >
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
