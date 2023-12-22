import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Login() {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [responseMsg, setResponseMsg] = useState("");
  const navigate = useNavigate();
  const [loginAlert, setLoginAlert] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      setLoginAlert('Please log in to access this page.');
    }
  }, [location]);



  const login = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/login', { empId: empId, password: password })
      .then((response) => {
        setResponseMsg(response.data);
        localStorage.setItem('isLoggedIn', true); // Set logged-in flag
        navigate("/home");
      })
      .catch((error) => {
        if (error.response) {
          setResponseMsg(error.response.data);
        } else if (error.request) {
          setResponseMsg("No response from server");
        } else {
          setResponseMsg("Error: " + error.message);
        }
      });
  };

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
      <div className='p-3 bg-white w-25'>
        {loginAlert && <div className="alert alert-warning" role="alert">{loginAlert}</div>}
        <form>
          <h3>Login</h3>
          <input type="text" placeholder="Employee ID" onChange={(e) => setEmpId(e.target.value)} className="form-control mb-2" />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />
          <input type="button" value="Login" className="btn btn-primary" onClick={login} />
        </form>
        <p>{responseMsg}</p>
      </div>
    </div>
  );
}

export default Login;
