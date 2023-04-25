import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/all'
import { DataGrid } from '@mui/x-data-grid';

function UsersList() {
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
                        <MdEdit className='editusericon'/>
                        <MdDelete className='deleteusericon'/>
                    </>
                )
            }
              },
              
        
      ];
      
      const rows = [
        { id: 1, username: 'Pavan ',avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80", 
        email: 'Pavan@gmail.com', status:"active",transaction:"₹4500" },
        { id: 2, username: 'Manoj ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU", 
        email: 'Manoj@gmail.com', status:"active",transaction:"₹5500" },
        { id: 3, username: 'Sharan ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU", 
        email: 'Sharan@gmail.com', status:"active",transaction:"₹21500" },
        { id: 4, username: 'Naveen ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j5EsloB48DnxRWOYQKJxT01dGj6cVFEDPQ&usqp=CAU", 
        email: 'Naveen@gmail.com', status:"active",transaction:"₹7812" },
        { id: 5, username: 'Kumar ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBSMhxhY6n02QNZBu83v1WAhoXP2CMUlG4A&usqp=CAU", 
        email: 'Kumar@gmail.com', status:"active",transaction:"₹45500" },
        { id: 6, username: 'Kiran ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU", 
        email: 'Kiran@gmail.com', status:"active",transaction:"₹9856" },
        { id: 7, username: 'Pallavi ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU", 
        email: 'Pallavi@gmail.com', status:"active",transaction:"₹45000" },
        { id: 8, username: 'Pooja ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHW3Vy1-oeLGeE7xoybQzImGHBOLp2zkekg&usqp=CAU", 
        email: 'Pooja@gmail.com', status:"active",transaction:"₹4400" },
        { id: 9, username: 'Vandana',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU", 
        email: 'Vandana@gmail.com', status:"active",transaction:"₹4200" },
        { id: 10, username: 'Joseph ',avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72nARG6ueWpDbDXkXV137m7fVt2ALVshZwg&usqp=CAU", 
        email: 'Joseph@gmail.com', status:"active",transaction:"₹50000" },
      
      ];

  return (
    
    <div className='userList'>
     <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
        disableRowSelectionOnClick
        
      />
    </div>
  )
}

export default UsersList