import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Menu/Home';
import UsersList from './Components/UserList/UsersList'
import { Routes,Route,Outlet } from 'react-router-dom';
function App() {
  return (
   <div>

<Header/>
<div className='sidebar-container'>
<Sidebar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path="/user" element={<UsersList/>}/>
</Routes>
<Outlet/>

</div>

    </div>
  )
}

export default App;