import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">EMS</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rejester">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ManageUsers">Manage Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/display">Mange Employees</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}
