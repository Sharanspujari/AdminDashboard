import React from 'react'
import {FaUserAlt,BsFillBagDashFill,CgMoreVerticalO,SiProducthunt} from 'react-icons/all'
import BarChart from '../Charts/ChartAnalytic'
import ChartAnalytic from '../Charts/ChartAnalytic'
function Analytics() {
  return (
    <div className='analytics'>

      <div className='leftanalytics'>
        
        <div className='lefta'>
        <div className='custemer'>
       <FaUserAlt className='custemericon'/>
       <span className='custmerno'>32</span>
       <h3 className='custmertitle'>Custmer</h3>
        </div>
        <div className='custemer'>
        <BsFillBagDashFill className='custemericon'/>
       <span className='custmerno'>65</span>
       <h3 className='custmertitle'>Orders</h3>
        </div>

        </div>
       
        <div className='righta'>
      
        <div className='custemer'>
        <CgMoreVerticalO className='custemericon'/>
        <span className='custmerno'>65</span>
       <h3 className='custmertitle'>Revenue</h3>
        </div>

        <div className='custemer'>
        <SiProducthunt className='custemericon'/>
        <span className='custmerno'>65</span>
       <h3 className='custmertitle'>Products</h3>
        </div>

        </div>

      </div>


      <div className='rightanalytics'>
      
      </div>
    </div>
  )
}

export default Analytics