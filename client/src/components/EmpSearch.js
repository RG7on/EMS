import React,{useState} from 'react'
import Axios from 'axios'
function EmpSearch() {
    const [empId,setEmpId]=useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [gender, setGender] = useState('')
    const [employees,setEmployees]=useState([])
    const fetchEmps=()=>{
        Axios.get("http://localhost:3001/fetchEmployee/",{
            params:{
                empId:empId,
                firstName:firstName,
                lastName:lastName,
                department:department
            }
        })
        .then((res)=>
        {
            setEmployees(res.data.employees)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div>
            <form>
        <div className='d-flex justify-content-center m-3 p-3'>
        <input type="text" className="form-control m-1" placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}}/>
        <input type="text" className="form-control m-1" placeholder="Last name" onChange={(e)=>{setLastName(e.target.value)}}/>
        <input type="text" className="form-control m-1" placeholder="Employee ID" onChange={(e)=>{setEmpId(e.target.value)}}/>
        <select className="form-select m-1" onChange={(e)=>{setDepartment(e.target.value)}}>
        <option selected>Choose Department</option>
        </select>
        <div class="form-check m-1">
        <input type='radio' className='form-check-input' value="male"/>Male
        </div>
        <div class="form-check m-1">
        <input type='radio' className='form-check-input' value="female"/>Female
        </div>
        <input type="button" value="Search" onClick={fetchEmps} className="btn btn-primary m-1"/>
        </div>
        </form>
      <div>
      <table className='table table-bordered'>
                    <thead>
                            <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Position</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Hire Date</th>
                            <th>Emergency Number</th>
                            </tr>
                        </thead>
        { 
            employees.map((e)=>{
                return(
                        <tbody>
                            <tr>
                                <td>{e.empId}</td>
                                <td>{e.firstName} {e.lastName}</td>
                                <td>{e.gender}</td>
                                <td>{e.position}</td>
                                <td>{e.dept}</td>
                                <td>{e.contact.email}</td>
                                <td>{e.contact.phone}</td>
                                <td>{e.address}</td>
                                <td>{e.hireDate}</td>
                                <td>{e.emergencyNumber}</td>
                            </tr>
                        </tbody>
                )
            })
        }
        </table>
        </div>
        </div>
  )
}

export default EmpSearch