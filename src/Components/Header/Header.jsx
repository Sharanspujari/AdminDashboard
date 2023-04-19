import React from 'react'
import {GrNotification,GrLanguage,FiSettings} from 'react-icons/all'
function Header() {
  return (
   
    <div className='header-div'>
        <div className='container'>
            <div className='left'>
            <span className='logo'>Dashboard</span>
            </div>
            <div className='right'>
                <div className='icons'>
                <GrNotification/>
                <span className='total-notifications'>4</span>
                </div>
                <div className='icons'>
                <GrLanguage/>
                <span className='total-notifications'>6</span>
                </div>
                
                <div className='icons'>
                <FiSettings/>
               
                </div>
            </div>
           
          
        </div>
    </div>

  )
}

export default Header