import React, { useState } from "react";
import Axios from "axios";

export default function Register() {
    const [empName, setEmpName] = useState("");
    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const addEmp = () => {
        Axios.post('http://localhost:3001/addEmp', {
            empName: empName,
            empId: empId,
            password: password
        })
        .then((response) => {
            setResponseMsg(response.data);
        })
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                setResponseMsg(error.response.data);
            } else {
                console.error(error);
                setResponseMsg("Error occurred while saving data");
            }
        });
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={e => e.preventDefault()}>
                    <h3>Register Employee</h3>
                    <input type="text" placeholder="Employee Name" onChange={(event) => setEmpName(event.target.value)} className="form-control mb-2" />
                    <input type="text" placeholder="Employee ID" onChange={(event) => setEmpId(event.target.value)} className="form-control mb-2" />
                    <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} className="form-control mb-2" />
                    <input type="button" value="Register" className="btn btn-primary" onClick={addEmp} />
                </form>
                <p>{responseMsg}</p>
            </div>
        </div>
    );
}
