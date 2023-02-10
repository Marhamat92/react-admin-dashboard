import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart() {

  const data = [
    {
      name: 'Jan',
      "Active User": 4000,

    },
    {
      name: 'Feb',
      "Active User": 3000,

    },
    {
      name: 'Mar',
      "Active User": 2000,

    },
    {
      name: 'Apr',
      "Active User": 2780,

    },
    {
      name: 'May',
      "Active User": 1890,

    },
    {
      name: 'Jun',
      "Active User": 2390,

    },
    {
      name: 'Jul',
      "Active User": 3490,

    },
    {
      name: 'Aug',
      "Active User": 3490,

    },
    {
      name: 'Sep',
      "Active User": 3490,

    },
    {
      name: 'Oct',
      "Active User": 3490,

    },
    {
      name: 'Nov',
      "Active User": 3490,

    },
    {
      name: 'Dec',
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