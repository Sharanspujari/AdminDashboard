import React from 'react'
import {MdVisibility} from 'react-icons/all'
function SmallWidges() {
  return (
    <div className='small-widges'>
        <span className='member-heading'>New Members</span>
       
        <ul className='newuser-ul'>
       
        <li className='newuser-li'>
      <img className='user-img' src='https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt=' image not found'/>
      
       <div className='details-container'>
   <span className='user-name'>Suprith</span>
   <span className='user-job'>Software Engineer</span>
       </div>

       <button className='display-btn'>
       <MdVisibility className='display-icon'/>
        Display
       </button>
       </li>

       <li className='newuser-li'>
       <img className='user-img' src='https://t3.ftcdn.net/jpg/02/36/48/86/360_F_236488644_opXVvD367vGJTM2I7xTlsHB58DVbmtxR.jpg' alt=' image not found'/>
       <div className='details-container'>
   <span className='user-name'>Abhishek</span>
   <span className='user-job'>Software Engineer</span>
       </div>
       <button className='display-btn'>
       <MdVisibility className='display-icon'/>
       Display
       </button>
       </li>

       <li className='newuser-li'>
       <img className='user-img' src='https://www.shutterstock.com/image-photo/web-camera-head-shot-computer-260nw-1863658792.jpg' alt=' image not found'/>
       <div className='details-container'>
   <span className='user-name'>Anjali</span>
   <span className='user-job'>Software Engineer</span>
       </div>
       <button className='display-btn'>
       <MdVisibility className='display-icon'/>
       Display
       </button>
       </li>

       <li className='newuser-li'>
       <img className='user-img' src='https://i0.wp.com/www.kahanihindi.com/wp-content/uploads/2021/06/Girls-profile-picture-8.jpg?resize=450%2C400&ssl=1' alt=' image not found'/>
       <div className='details-container'>
   <span className='user-name'>Ashika</span>
   <span className='user-job'>Software Engineer</span>
       </div>
       <button className='display-btn'>
       <MdVisibility className='display-icon'/>
       Display
       </button>
       </li>
       <li className='newuser-li'>
       <img className='user-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQUg_P0cc8EgSCk-SdT8Yvcm6E5SbdfuhzA&usqp=CAU' alt=' image not found'/>
       <div className='details-container'>
   <span className='user-name'>Pallavi</span>
   <span className='user-job'>Software Engineer</span>
       </div>
       <button className='display-btn'>
       <MdVisibility className='display-icon'/>
       Display
       </button>
       </li>
       <li className='newuser-li'>
       <img className='user-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalTnxL604AYAhRBLY8ALueAe3Z5yiauJxHA&usqp=CAU' alt=' image not found'/>
       <div className='details-container'>
   <span className='user-name'>Arjun</span>
   <span className='user-job'>Software Engineer</span>
       </div>
       <button className='display-btn'>
       <MdVisibility className='display-icon'/>
       Display
       </button>
       </li>
       </ul>
    </div>
  )
}

export default SmallWidges