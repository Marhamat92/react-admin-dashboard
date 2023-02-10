import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart() {

  const data = [
    {
      name: 'Page A',
      "Active User": 4000,

    },
    {
      name: 'Page B',
      "Active User": 3000,

    },
    {
      name: 'Page C',
      "Active User": 2000,

    },
    {
      name: 'Page D',
      "Active User": 2780,

    },
    {
      name: 'Page E',
      "Active User": 1890,

    },
    {
      name: 'Page F',
      "Active User": 2390,

    },
    {
      name: 'Page G',
      "Active User": 3490,

    },
  ];




  return (
    <div className='chart'>
      <h1 className='chartTitle' >
        User Analytics
      </h1>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart