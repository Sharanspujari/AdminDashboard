import React from 'react'
import {BsPerson,AiOutlineCalendar,FcPhoneAndroid
  ,AiOutlineMail,GoLocation,MdPublish} from 'react-icons/all'
function Users() {
  return (
    <div className='updateusers'>
  <div className='userTitle'>
    <h1 className='userTitle'>Edit User</h1>
    <button className='adduserbtn'>Create</button>
  </div>

  <div className='usercontainerdetail'>
<div className='showuser'>
 
  <div className='showusertop'>
    <img className='showuserimg' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt=''/>
 <div className='showusertitle'>
  <span className='showusername'>Manoj kumar</span>
  <span className='showuserjob'>Software Engineer</span>
 </div>
  </div>
  <div className='usershowbottom'>
    <span className='userShowTitle'>Account Details</span>
    
    <div className='usershowinfo'>
      <BsPerson className='usershowicon'/>
      <span className='userShowinfotitle'>Manojkumar45</span>
    </div>
   
    <div className='usershowinfo'>
      <AiOutlineCalendar className='usershowicon'/>
      <span className='userShowinfotitle'>12.04.1997</span>
    </div>
    <span className='userShowTitle'>Contact Details</span>
    <div className='usershowinfo'>
      <FcPhoneAndroid className='usershowicon'/>
      <span className='userShowinfotitle'>8105563984</span>
    </div>
    <div className='usershowinfo'>
      <AiOutlineMail className='usershowicon'/>
      <span className='userShowinfotitle'>Manojkumar@gmail.com</span>
    </div>
   
    <div className='usershowinfo'>
      <GoLocation className='usershowicon'/>
      <span className='userShowinfotitle'>Bengaluru | Karnataka</span>
    </div>
  </div>

</div>
<div className='updateuser'>
  <span className='editusertitle'>Edit</span>
  <form className='userupdateform'>
  {/* left update */}
    <div className='leftuserupdate'>
      <div className='userupdateitem'>
        <label className='userlabel'>Username</label>
        <input type='text' className='usernameinput' placeholder='Manojkumar45' />
      </div>
      <div className='userupdateitem'>
        <label className='userlabel'>Full Name</label>
        <input type='text' className='usernameinput' placeholder='Manoj Kumar' />
      </div>
      <div className='userupdateitem'>
        <label className='userlabel'>Email</label>
        <input type='text' className='usernameinput' placeholder='Manojkumar@gmail.com' />
      </div>
      <div className='userupdateitem'>
        <label className='userlabel'>Phone</label>
        <input type='text' className='usernameinput' placeholder='+91 8105563984' />
      </div>
      <div className='userupdateitem'>
        <label className='userlabel'>Address</label>
        <input type='text' className='usernameinput' placeholder='Bengaluru | Karnataka' />
      </div>
    </div>
    {/* right update */}
    <div className='rightuserupdate'>
      <div className='userupdateupload'>
        <img className='userupdateimg' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt=''/>
      <label htmlFor='file'><MdPublish className='uploadicon'/></label>
      <input type='file' id='file' style={{display:'none'}}/>
      </div>
      <button className='userupdatebtn'>Update</button>

    </div>
  </form>

</div>
  </div>
    </div>
  )
}

export default Users