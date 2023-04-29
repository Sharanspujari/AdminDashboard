import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Menu/Home';
import UsersList from './Components/UserList/UsersList'
import Analytics from './Components/Analytics/Analytics';
import Sales from './Components/Sales/Sales';
import Products from './Components/Products/Products';
import { Routes,Route,Outlet } from 'react-router-dom';
import Transaction from './Components/Transactions/Transaction';
import Report from './Components/Reports/Report';
import Users from './Components/Users/Users'
function App() {
  return (
   <div>

<Header/>
<div className='sidebar-container'>
<Sidebar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path="/user" element={<UsersList/>}/>
<Route path="/analytics" element={<Analytics/>}/>
<Route path="/sales" element={<Sales/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/transaction' element={<Transaction/>}/>
<Route path='/reports' element={<Report/>}/>
<Route path='/users/:usersid' element={<Users/>}/>
</Routes>
<Outlet/>

</div>

    </div>
  )
}

export default App;