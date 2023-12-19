import React from 'react';
import { employees } from './emp_data'; // Ensure correct path
import { Pie, Bar } from 'react-chartjs-2';
import './Home.css'; // Assuming you have a CSS file for styling

function Home() {
    // Pie chart data: Gender distribution
    const genderCounts = employees.reduce((acc, employee) => {
        acc[employee.gender] = (acc[employee.gender] || 0) + 1;
        return acc;
    }, {});

    const pieData = {
        labels: Object.keys(genderCounts),
        datasets: [{
            data: Object.values(genderCounts),
            backgroundColor: ['#FF6384', '#36A2EB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB']
        }]
    };

    // Bar chart data: Average performance rating per department
    const departmentRatings = {};
    const departmentCounts = {};
    const commonOptions = {
      maintainAspectRatio: true,
      aspectRatio: 1.5, // Adjust as needed
      responsive: true,
      // Add any other common options here
  };

    employees.forEach(employee => {
        const dept = employee.department;
        const rating = employee.evaluation.Overall_Performance_Rating;

        if (departmentRatings[dept]) {
            departmentRatings[dept] += rating;
            departmentCounts[dept] += 1;
        } else {
            departmentRatings[dept] = rating;
            departmentCounts[dept] = 1;
        }
    });

    for (const dept in departmentRatings) {
        departmentRatings[dept] /= departmentCounts[dept];
    }

    const barData = {
        labels: Object.keys(departmentRatings),
        datasets: [{
            label: 'Average Rating',
            data: Object.values(departmentRatings),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    return (
<div className="home-container">
            <div className="chart-container">
                <Pie data={pieData} options={{ ...commonOptions, aspectRatio: 1.5 }} />
                <div>Total Employees: {employees.length}</div>
            </div>
            <div className="chart-container">
            <Bar data={barData} options={{ ...commonOptions, aspectRatio: 1.5 }} />

            </div>
        </div>
    );
}

export default Home;