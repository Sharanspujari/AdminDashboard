import React from 'react'
import Info from '../featureInfo/Info'
import Chart from '../Charts/Chart'
import { UserAnalyticsData } from '../../JsonData'
import SmallWidges from '../UserSmallWidges/SmallWidges'
import LargeWidges from '../UserLargeWidges/LargeWidges'
function Home() {


  return (
    <div className='home-body'>
        <Info/>
        <Chart data={UserAnalyticsData} title="User Analytics" grid dataKey="Active user" name="name"/>
       <div className='user-widges'>
        <SmallWidges/>
        <LargeWidges/>
       </div>
    </div>
  )
}
 

export default Home