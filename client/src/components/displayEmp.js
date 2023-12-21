import React from 'react'
import {employees} from './emp_data.js'
import { Link } from 'react-router-dom'
function DisplayEmp() {
  return (
    <div>
        <h1 className='mb-3 mt-3'>Employees Data</h1>
        <h2>Totoal Employees: {employees.length}</h2>
        <table className='table table-bordered'>
    <thead>
        <tr><th>Name</th><th>Gender</th><th>Department</th><th>City</th><th>Action</th></tr>
    </thead>
        
        {
            employees.map((emp,index)=>{
                return(
                    <tbody>
                        <tr key={index}>
                            <td>{emp.firstName} {emp.lastName}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.department}</td>
                            <td>{emp.address.city}</td>
                            <td><Link to=''>View</Link></td>
                        </tr>
                    </tbody>
                )
            })
        }
        </table>
    </div>
  )
}

export default DisplayEmp