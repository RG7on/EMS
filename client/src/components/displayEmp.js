import React, { useState } from 'react';
import { employees } from './emp_data.js';
import { Link } from 'react-router-dom';

function DisplayEmp() {
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchGender, setSearchGender] = useState('');
    const [searchDept, setSearchDept] = useState('');
    const [searchCity, setSearchCity] = useState('');

    const uDep = Array.from(new Set(employees.map(emp => emp.department)));
    const uCities = Array.from(new Set(employees.map(emp => emp.address.city)));

    const filterEmp = () => {
        return employees.filter(emp => {
            return (
                (searchId === '' || emp.employee.includes(searchId)) &&
                (searchName === '' || (`${emp.firstName} ${emp.lastName}`).toLowerCase().includes(searchName.toLowerCase())) &&
                (searchGender === '' || emp.gender === searchGender) &&
                (searchDept === '' || emp.department.toLowerCase().includes(searchDept.toLowerCase())) &&
                (searchCity === '' || emp.address.city.toLowerCase().includes(searchCity.toLowerCase()))
            );
        });
    };

    return (
        <div>
            <h1 className='mb-3 mt-3'>Employees Data</h1>
            <h2>Total Employees: {employees.length}</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Employee ID" onChange={(e) => setSearchId(e.target.value)} />
                <input type="text" className="form-control" placeholder="Name" onChange={(e) => setSearchName(e.target.value)} />
                <select className="form-control" onChange={(e) => setSearchDept(e.target.value)}>
                    <option value="">Select Department</option>
                    {uDep.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                    ))}
                </select>
                <select className="form-control" onChange={(e) => setSearchCity(e.target.value)}>
                    <option value="">Select City</option>
                    {uCities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
            </div>
            <div>
    <label className="form-label fw-bold" style={{ marginLeft: '10px' }}>Gender</label><br />
    <input 
        className="form-check-input" 
        type="radio" 
        name="gender" 
        value="Male" 
        style={{ marginRight: '10px', marginTop: '25px', marginLeft: '10px' }}
        onChange={(e) => setSearchGender(e.target.value)} 
    />
    <label 
        className="form-check-label" 
        style={{ fontSize: '20px', marginTop: '19px', marginLeft: '10px' }}>
        Male
    </label>
    <input 
        className="form-check-input" 
        type="radio" 
        name="gender" 
        value="Female" 
        style={{ marginLeft: '30px', marginRight: '10px', marginTop: '25px' }}
        onChange={(e) => setSearchGender(e.target.value)} 
    />
    <label 
        className="form-check-label" 
        style={{ fontSize: '20px', marginTop: '19px', marginLeft: '10px' }}>
        Female
    </label>
</div>
            <table className='table table-bordered'>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Gender</th><th>Department</th><th>City</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {filterEmp().map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.employee}</td>
                            <td>{emp.firstName} {emp.lastName}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.department}</td>
                            <td>{emp.address.city}</td>
                            <td>
                                <Link to={`/manageEmp/${emp.employee}`} className="btn btn-primary">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayEmp;
