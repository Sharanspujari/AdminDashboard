import React,{useState} from "react";
import {MdEdit,MdDelete,AiOutlineSearch} from 'react-icons/all'
import { DataGrid } from '@mui/x-data-grid';
import { productsrowsdata } from '../../JsonData';
import { Link } from 'react-router-dom';

function ProductsList() {
const [userproduct,setProduct]=useState(productsrowsdata);
const [searchProductVal,setSearchProductVal]=useState("");
    function handleDelete(id){
        setProduct(userproduct.filter((data)=>
          data.id!=id
        ))
      }
      function handleproductSearch()
      {
    if(searchProductVal.length === 0){
     
            setProduct(productsrowsdata.name);
    
    }
    const filterByproduct = productsrowsdata.filter((item)=>{
      if(item.name.toLowerCase().includes(searchProductVal.toLowerCase())){
        return item.name;
      }
    })

    setProduct(filterByproduct)
    
      }
      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'Product', headerName: 'Product', width:300 ,renderCell:(param)=>{
            return (
                <div className='userproductlist'>
                   <img className='productuserimages' src={param.row.img} alt=''/> 
                   {param.row.name}
                </div>
            )
        } 
    },
        { field: 'stock', headerName: 'Stock', width: 150},
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
        field: 'price',
        headerName: 'Price',
        width: 150,
          },
          {
            field: 'action',
            headerName: 'Action',
            width:200,
            renderCell:(param)=>{
                return(
                    <>  
                    <Link to={"/product/"+param.row.id}> <MdEdit className='editproducticon'/></Link>
                       
                       <MdDelete className='deleteproducticon' onClick={()=>handleDelete(param.row.id)}/>
                    </>
                )
            }
              },
              
        
      ];
      
  return (
    <div className="products">
     <h3 className='userslist'>Products List</h3>
     <div className='searchcontainer'> <input className='usersearchbar' onChange={(e)=>setSearchProductVal(e.target.value)} placeholder='Search product....'/>
     <AiOutlineSearch className='searchicon'  onClick={handleproductSearch}/>
    </div>
      <DataGrid
        rows={userproduct}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
export default ProductsList;
