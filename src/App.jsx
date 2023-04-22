import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Menu/Home';
function App() {
  return (
    <div>
<Header/>
<div className='sidebar-container'>
<Sidebar/>
<Home/>

</div>
    </div>
  )
}

export default App;