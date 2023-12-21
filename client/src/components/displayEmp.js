import React from 'react'
import emp_data from './emp_data.js'
function displayEmp() {
  return (
    <div>
        <table>
    <thead>
        <tr><th>Name</th><th>Gender</th><th>Department</th><th>City</th></tr>
    </thead>
        
        {
            emp_data.map((emp,index)=>{
                return(
                    <tbody>
                        <tr key={index}>
                            <td></td>
                        </tr>
                    </tbody>
                )
            })
        }
        </table>
    </div>
  )
}

export default displayEmp