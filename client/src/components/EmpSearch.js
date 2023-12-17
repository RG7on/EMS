import React,{useState} from 'react'
import Axios from 'axios'
function EmpSearch() {
    const [empId,setEmpId]=useState('')
    const [employees,setEmployees]=useState([])
    const fetchEmps=()=>{
        Axios.get(`http://localhost:3001/fetchEmployee/${empId}`)
        .then((res)=>
        {
            setEmployees(res.data.employee)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div><table className="table table-striped">
    <thead>
        <tr>
            <td colSpan="2"><h1 className="display-6">Search Employees</h1> </td>
        </tr>
    </thead>
    <tbody>        
                <tr>
                    <td>Employee Id</td>
                    <td><input type="text" onChange={(e) => setEmpId(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><input type="button" onClick={fetchEmps} value="Search Employee"/></td>
                </tr>  
                </tbody>
      </table>
    
        {
            employees.map((e)=>{
                return(
                   <div>
                    <h4>{e.empId}</h4>
                    <h4>{e.firstName}</h4>
                    <h4>{e.lastName}</h4>
                    <h4>{e.gender}</h4>
                    <h4>{e.position}</h4>
                    <h4>{e.dept}</h4>
                    <h4>{e.contact.email}</h4>
                    <h4>{e.contact.phone}</h4>
                    <h4>{e.address}</h4>
                    <h4>{e.hireDate}</h4>
                    <h4>{e.emergencyNumber}</h4>
                   </div> 
                )
            })
        }
    </div>
  )
}

export default EmpSearch