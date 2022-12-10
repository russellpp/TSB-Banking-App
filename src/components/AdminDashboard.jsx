import React from 'react'
import Sidebar from './admincomponents/Sidebar'
import Customers from './admincomponents/Customers'
import './admindashboard.css';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className='adminDashboard'>
        <div className='sideBar'>
            <Sidebar/>
        </div>
        <div className='adminContent'>    
            <Customers/>
        </div>
    </div>

  )
}

export default AdminDashboard
