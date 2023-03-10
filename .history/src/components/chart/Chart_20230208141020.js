import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({ title, data, dataKey, grid }) {




  return (
    <div className='chart'>
      <h1 className='chartTitle' >
        {title}
      </h1>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart