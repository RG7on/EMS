import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [newPasswords, setNewPasswords] = useState({});

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/fetchUsers');
            setUsers(response.data.users);
            setError('');
        } catch (err) {
            setError('Error fetching users');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        const confirmDeletion = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDeletion) {
            return;
        }
    
        try {
            await axios.delete(`http://localhost:3001/deleteUser/${userId}`);
            fetchUsers();
        } catch (err) {
            setError('Error deleting user');
            console.error(err);
        }
    };

    const handleUpdatePassword = async (userId) => {
        const newPassword = newPasswords[userId];
        if (!newPassword) {
            alert('Please enter a new password.');
            return;
        }

        try {
            await axios.put(`http://localhost:3001/updateUser/${userId}`, { newPassword });
            alert('Password updated successfully');
            setNewPasswords(prev => ({ ...prev, [userId]: '' }));
            fetchUsers();
        } catch (err) {
            console.error(err);
            alert('Failed to update password');
        }
    };

    const updatePassword = (userId, newPassword) => {
        setNewPasswords(prev => ({ ...prev, [userId]: newPassword }));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-4">
            <h1>Manage Users</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                        <td>{user.empName}</td>
                        <td>{user.empId}</td>
                        <td>
                            <div className="d-flex align-items-center">
                                <input 
                                    className="form-control mr-2"
                                    style={{ width: '50%'}}
                                    type="password" 
                                    placeholder="New Password"
                                    value={newPasswords[user._id] || ''}
                                    onChange={(e) => updatePassword(user._id, e.target.value)}
                                />
                                <button 
                                style={{ marginRight: '10%'}}
                                    onClick={() => handleUpdatePassword(user._id)}
                                    className="btn btn-primary mr-2">
                                    Update Password
                                </button>
                                <button 
                                    onClick={() => handleDelete(user._id)} 
                                    className="btn btn-danger">
                                    Delete User
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
