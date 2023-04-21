import React from 'react'
import {AiOutlineBorderVerticle,
    MdOutlineTimeline,FiTrendingUp,SlUser
    ,MdProductionQuantityLimits,BiRupee,GoGraph,FiMail,VscFeedback,TiMessages,IoBagOutline} from 'react-icons/all'
function Sidebar() {
  return (
<>
   <div className='side-bar'> 

   <div className='wrapper'>

    <div className='sidebar-menu'>
    <h3 className='heading'>Admin-panel</h3>
    <ul className='sidebar-ul'>
        <li className='sidebar-list active'><AiOutlineBorderVerticle className='sideicon'/>Home</li>
        <li className='sidebar-list'><MdOutlineTimeline className='sideicon'  />Analytics</li>
        <li className='sidebar-list'><FiTrendingUp className='sideicon'/>Sales</li>
       
    </ul>
    </div>

    <div className='sidebar-menu'>
    <h3 className='heading'>Quick-menu</h3>
    <ul className='sidebar-ul'>
        <li className='sidebar-list'><SlUser className='sideicon'/>Users</li>
        <li className='sidebar-list'><MdProductionQuantityLimits className='sideicon'  />Products</li>
        <li className='sidebar-list'><BiRupee className='sideicon'/>Transactions</li>
        <li className='sidebar-list'><GoGraph className='sideicon'/>Reports</li>
    </ul>
    </div>
   
    <div className='sidebar-menu'>
    <h3 className='heading'>Notifications</h3>
    <ul className='sidebar-ul'>
        <li className='sidebar-list'><FiMail className='sideicon'/>Mail</li>
        <li className='sidebar-list'><VscFeedback className='sideicon'  />FeedBack</li>
        <li className='sidebar-list'><TiMessages className='sideicon'/>Messages</li>
       
    </ul>
    </div>

    <div className='sidebar-menu'>
    <h3 className='heading'>Staff</h3>
    <ul className='sidebar-ul'>
        <li className='sidebar-list'><IoBagOutline className='sideicon'/>Manage</li>
        <li className='sidebar-list'><MdOutlineTimeline className='sideicon'  />Analytics</li>
        <li className='sidebar-list'><GoGraph className='sideicon'/>Reports</li>
       
    </ul>
    </div>
    

   </div>
   
   </div>
   </>

  )
}

export default Sidebar