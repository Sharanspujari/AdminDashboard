import React from 'react'

function NewUser() {
  return (
    <div className='newuserpage'>
        <h1 className='newuserTitle'>New User</h1>
        <form className="newuserform">
            <div className='newuseritem'>
                <label>User Name</label>
                <input type='text' placeholder='Praveen'/>
            </div>
            <div className='newuseritem'>
                <label>Full Name</label>
                <input type='text' placeholder='Praveen Kumar'/>
            </div>
            <div className='newuseritem'>
                <label>Email</label>
                <input type='email' placeholder='PraveenKumar@gmail.com'  />
            </div>
            <div className='newuseritem'>
                <label>Password</label>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='newuseritem'>
                <label>Phone</label>
                <input type='text' placeholder='91+ 9900356211'/>
            </div>
            <div className='newuseritem'>
                <label>Address</label>
                <input type='text' placeholder='Bengaluru | India'/>
            </div>
           
            <div className='newuseritem'>
                <label>Active</label>
                <select className='newuserselect' name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className='newuseritem'>
                <label>Gender</label>
                <div className='newusergender'>
                <input type='radio' name='gender' id='male' value="male"/>
                <label for="male">Male</label>
                <input type='radio' name='gender' id='female' value="female"/>
                <label for="female">Female</label>
                <input type='radio' name='gender' id='other' value="other"/>
                 <label for="other">Other</label>
                 </div>
            </div>
            <button className='createuserbtn'>Create</button>
        </form>
    </div>
  )
}

export default NewUser