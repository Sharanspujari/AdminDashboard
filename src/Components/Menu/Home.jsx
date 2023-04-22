import React from 'react'
import Info from '../featureInfo/Info'
import Chart from '../Charts/Chart'
import { UserAnalyticsData } from '../../JsonData'
function Home() {
  return (
    <div className='home-body'>
        <Info/>
        <Chart data={UserAnalyticsData} title="User Analytics" grid dataKey="Active user" name="name"/>
       <div className='user-widges'>hello</div>
    </div>
  )
}

export default Home