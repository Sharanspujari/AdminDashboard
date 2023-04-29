import React,{useState} from 'react'
import {MdEdit,MdDelete} from 'react-icons/all'
import { DataGrid } from '@mui/x-data-grid';
import { userrowsdata } from '../../JsonData';
import { Link } from 'react-router-dom';
function UsersList() {

  const [userData,setUserDate]=useState(userrowsdata)

  function handleDelete(id){
    setUserDate(userData.filter((data)=>
      data.id!=id
    ))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200 ,renderCell:(param)=>{
            return (
                <div className='userlistcontainer'>
                   <img className='userimages' src={param.row.avatar} alt=''/> 
                   {param.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200},
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
        field: 'transaction',
        headerName: 'Transactions',
        width: 150,
          },
          {
            field: 'action',
            headerName: 'Action',
            width:200,
            renderCell:(param)=>{
                return(
                    <>  
                    <Link to={"/users/"+param.row.id}> <MdEdit className='editusericon'/></Link>
                       
                       <MdDelete className='deleteusericon' onClick={()=>handleDelete(param.row.id)}/>
                    </>
                )
            }
              },
              
        
      ];
      
     

  return (
 
    <div className='userList'>
     <h3 className='userslist'>Users List</h3>
     <input className='usersearchbar' placeholder='Search user....'/>
     <DataGrid
        rows={userData}
        columns={columns}
        paginationModel={{ page: 0, pageSize:10 }}
        checkboxSelection
        disableRowSelectionOnClick
        
      />
    </div>
  )
}

export default UsersList