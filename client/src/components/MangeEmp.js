import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { employees } from './emp_data.js';


function MangeEmp() {
  const { empId } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(emp => emp.employee === empId);
  if (!employee) {
      return <div>Employee not found</div>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      const index = employees.findIndex(emp => emp.employee === empId);
      if (index > -1) {
        employees.splice(index, 1);
      }

      navigate('/display');
    }
  }

  return (
<div className="container mt-4">
  <h1>Employee Details: {employee.firstName} {employee.lastName}</h1>

  <div className="row">
    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }} className="card-title">Basic Information</h4>
          <p><b>ID: </b>{employee.employee}</p>
          <p><b>Name: </b>{employee.firstName} {employee.lastName}</p>
          <p><b>Gender: </b>{employee.gender}</p>
          <p><b>Position: </b>{employee.position}</p>
          <p><b>Department: </b>{employee.department}</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }} className="card-title">Address</h4>
          <p><b>Street: </b>{employee.address.street}</p>
          <p><b>City: </b>{employee.address.city}</p>
          <p><b>State: </b>{employee.address.state}</p>
          <p style={{ marginBottom: '56px' }}><b>Zip Code: </b>{employee.address.zipCode}</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card mb-2">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }} className="card-title">Contact Information</h4>
          <p><b>Email: </b>{employee.contact.email}</p>
          <p><b>Phone: </b>{employee.contact.phone}</p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }} className="card-title">Qualifications</h4>
          <p style={{ marginBottom: '15px' }}>{employee.qualifications.join(', ')}</p>
        </div>
      </div>
    </div>
  </div>

  <div className="row">

    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }} className="card-title">Employment Details</h4>
          <p><b>Hire Date: </b>{employee.employmentDetails.hireDate}</p>
          <p><b>Employment Type: </b>{employee.employmentDetails.employmentType}</p>
          <p style={{ marginBottom: '24px' }}><b>Shift: </b>{employee.employmentDetails.shift}</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }} className="card-title">Emergency Contact</h4>
          <p><b>Name: </b> {employee.emergencyContact.name}</p>
          <p><b>Relationship:</b> {employee.emergencyContact.relationship}</p>
          <p style={{ marginBottom: '24px' }}><b>Phone: </b> {employee.emergencyContact.phone}</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h4 style={{ marginBottom: '10px' }}className="card-title">Performance Evaluation</h4>
          <p><b>Overall Performance Rating: </b>{employee.evaluation.Overall_Performance_Rating}</p>
          <p><b>Evaluator Comments: </b><br></br>{employee.evaluation.Evaluator_Comments}</p>
          {/* Include other evaluation details if needed */}
        </div>
      </div>
    </div>
  </div>

  
  {/* Buttons for actions */}
  <div className="mt-4">
  <button className="btn btn-danger" onClick={handleDelete}>Delete Employee</button>
    <Link to={`/empEvaluation/${empId}`} className="btn btn-secondary ml-2">Employee Evaluation</Link>
  </div>
</div>

);
}



export default MangeEmp