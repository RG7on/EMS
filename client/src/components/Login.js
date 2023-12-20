import React,{useState} from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [empId,setEmpId] = useState('');
  const [password,setPassword] = useState('');
  const [responseMsg, setresponseMsg] = useState("");
  const navigate=useNavigate()

  const login = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/login', { empId: empId, password: password })
        .then((response) => {
          setresponseMsg(response.data);
          navigate("/home")
        })
        .catch((error) => {
            if (error.response) {
                setresponseMsg(error.response.data);
            } else if (error.request) {
                setresponseMsg("No response from server");
            } else {
                setresponseMsg("Error: " + error.message);
            }
        });
};

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
        <div className='p-3 bg-white w-25'>
        <form>
            <h3>Login</h3>
            <input type="text" placeholder="Employee ID" onChange={(event)=>setEmpId(event.target.value)} className="form-control mb-2"/>
            <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} className="form-control mb-2"/>
            <input type="button" value="Login" className="btn btn-primary" onClick={login}/>
        </form>
        <p>{responseMsg}</p>
        </div>
    </div>
  )
}

export default Login