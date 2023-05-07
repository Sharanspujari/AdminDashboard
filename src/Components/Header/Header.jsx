import React from "react";
import {
  GrNotification,
  GrLanguage,
  FiSettings,
  AiOutlineSearch,
  MdOutlineSpaceDashboard,
} from "react-icons/all";

function Header({onclick}) {
  

  return (
    <div className="header-div">
      <div className="container">
        <div className="left">
          <span>
            <MdOutlineSpaceDashboard className="logo" />
          </span>
        </div>
        <div className="searchheader">
          <input className="searchinput" placeholder="Search" type="text" />
          <span>
            {" "}
            <AiOutlineSearch className="headersearch" />
          </span>
        </div>
        <div className="right">
          <div className="icons">
            <GrNotification className="icon" onClick={onclick} />
            
            <span className="total-notifications">4</span>
          </div>
          <div className="icons">
            <GrLanguage className="icon" />
            <span className="total-notifications">6</span>
          </div>

          <div className="icons">
            <FiSettings className="settingicon" />
          </div>
          <img src="profile_user.jpg" className="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
