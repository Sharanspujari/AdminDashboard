import React from 'react'
import {FaUserAlt,BsFillBagDashFill,CgMoreVerticalO,SiProducthunt} from 'react-icons/all'
// import BarChart from '../Charts/ChartAnalytic'
import ChartAnalytic from '../Charts/ChartAnalytic'
import Chart from '../Charts/Chart'
// import { UserAnalyticsData } from '../../JsonData'

function Analytics() {
 

  return (
    <div className='analytics'>

      <div className='leftanalytics'>
        
        <div className='lefta'>
        <div className='custemer'>
       <FaUserAlt className='custemericon'/>
       <span className='custmerno'>2100</span>
       <h3 className='custmertitle'>Custmer</h3>
        </div>
        <div className='custemer'>
        <BsFillBagDashFill className='custemericon'/>
       <span className='custmerno'>1905</span>
       <h3 className='custmertitle'>Orders</h3>
        </div>

        </div>
       
        <div className='righta'>
      
        <div className='custemer'>
        <CgMoreVerticalO className='custemericon'/>
        <span className='custmerno'>420000</span>
       <h3 className='custmertitle'>Revenue</h3>
        </div>

        <div className='custemer'>
        <SiProducthunt className='custemericon'/>
        <span className='custmerno'>22</span>
       <h3 className='custmertitle'>Products</h3>
        </div>

        </div>

      </div>


      <div className='rightanalytics'>
     <ChartAnalytic/>
      </div>
    </div>
  )
}

export default Analytics