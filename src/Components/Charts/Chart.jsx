import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chat({title,data,dataKey,name,grid}) {
 
  // #8884d8
  return (
    <div className='chart-container'>
      <h3  className='chart-heading'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      <AreaChart data={data}>
      <XAxis dataKey={name} stroke='indigo'/>
      <YAxis dataKey={dataKey} stroke='indigo'/>
      <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
      <Tooltip />
     {grid && <CartesianGrid stroke='lightgray' strokeDasharray="5 5"/>}
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chat