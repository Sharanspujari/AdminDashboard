import React from 'react'
import {GrNotification,GrLanguage,FiSettings} from 'react-icons/all'
function Header() {

  return (
    <div className='header-div'>
        <div className='container'>
            <div className='left'>
            <span><img className='logo' src='business-report.png' alt=''/></span>
            </div>
            <div className='right'>
                <div className='icons'>
                <GrNotification className='icon'/>
                <span className='total-notifications'>4</span>
                </div>
                <div className='icons'>
                <GrLanguage className='icon'/>
                <span className='total-notifications'>6</span>
                </div>
                
                <div className='icons'>
                <FiSettings className='settingicon'/>
               
                </div>
            <img src='profile_user.jpg' className='profile' />
            </div>
           
          
        </div>
    </div>

  )
}

export default Header;