import React from 'react'
import {BiDownArrowAlt,BiUpArrowAlt} from 'react-icons/all'
function Info() {
  return (
    <div className='featured-container'>
  <div className='contaner-items'>
  <span className='feature-title'>Revenue</span>
<div className='money-container'>
<span className='money'>₹85,002</span>

<span className='money-rate'>   -81.6 <BiDownArrowAlt className='down-arrow'/> </span>
</div>
<span className='feature-subtitle'>Compared to last month</span>
  </div>

  <div className='contaner-items'>
  <span className='feature-title'>Sales</span>
<div className='money-container'>
<span className='money'>₹98,402</span>

<span className='money-rate'> -26.67 <BiDownArrowAlt className='down-arrow'/> </span>
</div>
<span className='feature-subtitle'>Compared to last month</span>
  </div>

  <div className='contaner-items'>
  <span className='feature-title'>Costs</span>
<div className='money-container'>
<span className='money'>₹13,400</span>

<span className='money-rate'> 2.4 <BiUpArrowAlt className='up-arrow'/> </span>
</div>
<span className='feature-subtitle'>Compared to last month</span>
  </div>

</div>
  )
}

export default Info