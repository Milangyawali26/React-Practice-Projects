import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard page</h1>
      <ul>
        <Link to='reports'>reports</Link>
        <br />
        <Link to='mocktest'>mocktest</Link>

      </ul>
     <Outlet></Outlet>
    
    </div>
  )
}

export default Dashboard
