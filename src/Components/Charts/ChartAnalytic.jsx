import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function ChartAnalytic() {

  const data = [
    {
      day: 'Sun',
      Revenue:200000,
      Products:150,
      amt: 2400,
    },
    {
      day: 'Mon',
      Revenue: 30000,
      Products: 40,
      amt: 2210,
    },
    {
      day: 'Tue',
      Revenue: 20000,
      Products:25,
      amt: 2290,
    },
    {
      day: 'Wed',
      Revenue:100000,
      Products:101,
      amt: 2000,
    },
    {
      day: 'Thu',
      Revenue:70000,
      Products: 48,
      amt: 2181,
    },
    {
      day: 'Fri',
      Revenue:63000,
      Products: 38,
      amt: 2500,
    },
    {
      day: 'Sat',
      Revenue:150000,
      Products:125,
      amt: 2100,
    },
  ];
  return (
  
       <ResponsiveContainer >
        <BarChart
        
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Products"  fill="#8884d8" />
          <Bar dataKey="Revenue"  fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  
  )
}

export default ChartAnalytic