import React,{useState} from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Menu/Home';
import UsersList from './Components/UserList/UsersList'
import Analytics from './Components/Analytics/Analytics';
import Sales from './Components/Sales/Sales';
import ProductsList from './Components/Products/ProductsList';
import { Routes,Route,Outlet } from 'react-router-dom';
import Transaction from './Components/Transactions/Transaction';
import Report from './Components/Reports/Report';
import NewUser from './Components/AddNewuser/NewUser';
import Users from './Components/Users/Users'
// import NewUser from './Components/AddNewuser/NewUser';
import Product from './Components/Productinfo/Product';
import AddNewproduct from './Components/NewProduct/AddNewproduct';
// import Popup from './Components/Popup/Popup';
function App() {
  const [isopen, setIsopen] = useState(false);
  return (
   <div>
  {isopen && (
              <div className="notificationdetail">
                <ul className="ulnotification">
                  <li className="linotification">
                    <img
                      className="notificationimg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j5EsloB48DnxRWOYQKJxT01dGj6cVFEDPQ&usqp=CAU"
                      alt=""
                    />
                    <div className="infonotification">
                      <span className="usernotification">Praveen John</span>
                      <span className="usermsg">
                        Check out every table in detail
                      </span>
                      <span className="notificationtime">May 27,03:15pm</span>
                    </div>
                  </li>
                
                </ul>
              </div>
            )}
    
<Header onclick={()=>setIsopen(!isopen)}/>

<div className='sidebar-container'>
<Sidebar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path="/user" element={<UsersList/>}/>
<Route path="/addnewuser" element={<NewUser/>}/>
<Route path="/analytics" element={<Analytics/>}/>
<Route path="/sales" element={<Sales/>}/>

<Route path='/products' element={<ProductsList/>}/>
<Route path='/product/:productId' element={<Product/>}/>
<Route path='/newproduct' element={<ProductsList/>}/>

<Route path='/transaction' element={<Transaction/>}/>
<Route path='/reports' element={<Report/>}/>
<Route path='/users/:usersid' element={<Users/>}/>
<Route path='/addnewproduct' element={<AddNewproduct/>}/>
</Routes>
<Outlet/>

</div>

    </div>
  )
}

export default App;