import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { employees } from './emp_data.js';
import './Home.css';

function EmpEvaluation() {
    const { empId } = useParams();
    const navigate = useNavigate();
    const [evaluation, setEvaluation] = useState(null);
    const [employeeName, setEmployeeName] = useState('');
  
    useEffect(() => {
      const employee = employees.find(emp => emp.employee === empId);
      if (employee) {
        setEvaluation({ ...employee.evaluation });
        setEmployeeName(`${employee.firstName} ${employee.lastName}`); // Set the employee name
      } else {
        navigate('/display');
      }
    }, [empId, navigate]);

  const handleInputChange = (e, field) => {
    setEvaluation({ ...evaluation, [field]: e.target.value });
  };

  const calculateAverage = () => {
    let sum = 0;
    let count = 0;
    Object.entries(evaluation).forEach(([key, value]) => {
      if (key !== 'Evaluator_Comments' && key !== 'Overall_Performance_Rating' && key !== 'Leadership_and_Initiative') {
        sum += parseInt(value);
        count++;
      }
    });
    return count > 0 ? (sum / count).toFixed(1) : 'N/A';
  };

  const handleSave = () => {
    const averageRating = calculateAverage();
    const updatedEvaluation = { ...evaluation, Overall_Performance_Rating: averageRating };

    const index = employees.findIndex(emp => emp.employee === empId);
    if (index > -1) {
      employees[index].evaluation = updatedEvaluation;
    }

    navigate(`/manageEmp/${empId}`);
  };

  if (!evaluation) {
    return <div>Loading...</div>;
  }


  return (
    <div className="container mt-4">
      <h1>Employee Evaluation: {employeeName}</h1>
      <center>
      <div className='tableContainer'>
      <table className='table'>
        <tbody>
          {/* Render input fields for each evaluation criterion */}
          {Object.entries(evaluation).map(([key, value]) => {
            if (key !== 'Evaluator_Comments' && key !== 'Overall_Performance_Rating') {
              return (
                <tr key={key}>
                  <td>{key.replace(/_/g, ' ')}</td>
                  <td>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={value}
                      onChange={(e) => handleInputChange(e, key)}
                    />
                  </td>
                  <td>{value}</td>
                </tr>
              );
            }
            return null;
          })}

          {/* Row for evaluator comments */}
          <tr>
            <td>Evaluator Comments</td>
            <td colSpan="2">
              <textarea className='textarea'
                value={evaluation.Evaluator_Comments}
                onChange={(e) => handleInputChange(e, 'Evaluator_Comments')}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table></div>

      {/* Save button */}
      <button className="btn btn-primary mt-1 mb-3 " onClick={handleSave}>Save Evaluation</button></center>
    </div>
  );
}

export default EmpEvaluation;
