import React from "react";
import {
  BiHome,
  MdOutlineTimeline,
  FiTrendingUp,
  SlUser,
  MdProductionQuantityLimits,
  BiRupee,
  GoGraph,
  AiOutlineLogout,
  FiMail,
  VscFeedback,
  TiMessages,
  IoBagOutline,
} from "react-icons/all";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="side-bar">
        <div className="wrapper">
          <div className="sidebar-menu">
            <h3 className="heading">Admin-panel</h3>
            <ul className="sidebar-ul">
              <Link to="/" className="userlink">
                {" "}
                <li className="sidebar-list active">
                  <BiHome className="sideicon" />
                  Home
                </li>
              </Link>
              <Link to="/analytics" className="userlink">
                {" "}
                <li className="sidebar-list">
                  <MdOutlineTimeline className="sideicon" />
                  Analytics
                </li>
              </Link>
              <Link to="/sales" className="userlink">
                <li className="sidebar-list">
                  <FiTrendingUp className="sideicon" />
                  Sales
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebar-menu">
            <h3 className="heading">Quick-menu</h3>
            <ul className="sidebar-ul">
              <Link to="/user" className="userlink">
                {" "}
                <li className="sidebar-list">
                  <SlUser className="sideicon" />
                  Users
                </li>
              </Link>

             <Link  to="/products" className="userlink"> <li className="sidebar-list">
                <MdProductionQuantityLimits className="sideicon" />
                Products
              </li> </Link>

             <Link to="/transaction" className="userlink" > <li className="sidebar-list">
                <BiRupee className="sideicon" />
                Transactions
              </li> </Link>

            <Link to="/reports" className="userlink"><li className="sidebar-list">
                <GoGraph className="sideicon" />
                Reports
              </li>
              </Link>

              <li className="sidebar-list">
                <AiOutlineLogout className="sideicon logout" />
                Logout
              </li>

            </ul>
          </div>

          {/* <div className='sidebar-menu'>
    <h3 className='heading'>Notifications</h3>
    <ul className='sidebar-ul'>
        <li className='sidebar-list'><FiMail className='sideicon'/>Mail</li>
        <li className='sidebar-list'><VscFeedback className='sideicon'  />FeedBack</li>
        <li className='sidebar-list'><TiMessages className='sideicon'/>Messages</li>
       
    </ul>
    </div> */}

          {/* <div className='sidebar-menu'>
    <h3 className='heading'>Staff</h3>
    <ul className='sidebar-ul'>
        <li className='sidebar-list'><IoBagOutline className='sideicon'/>Manage</li>
        <li className='sidebar-list'><MdOutlineTimeline className='sideicon'  />Analytics</li>
        <li className='sidebar-list'><GoGraph className='sideicon'/>Reports</li>
       
    </ul>
    </div> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
