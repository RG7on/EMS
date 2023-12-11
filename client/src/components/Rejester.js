import { useState } from "react";
import Axios from "axios";

export default function Rejester() {
    const [empName,setEmpName] = useState("")
    const [empId,setEmpId] = useState("")
    const [password,setPassword] = useState("")
    const [responseMsg, setresponseMsg] = useState("");

    const addEmp = () =>{
        Axios.post('http://localhost:3001/addEmp',{
            empName:empName,
            empId:empId,
            password:password
            })
            .then((response)=>{
                setresponseMsg(response.data)
    
            })
            .catch((error)=>{
                console.log(error)
            })
    
        }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
        <div className='p-3 bg-white w-25'>
        <form>
            <h3>Login</h3>
            <input type="text" placeholder="Employee Name" onChange={(event)=>setEmpName(event.target.value)} className="form-control mb-2"/>
            <input type="text" placeholder="Employee ID" onChange={(event)=>setEmpId(event.target.value)} className="form-control mb-2"/>
            <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} className="form-control mb-2"/>
            <input type="button" value="Login" className="btn btn-primary" onClick={addEmp}/>
        </form>
        <p>{responseMsg}</p>
        </div>
    </div>
  )
}
