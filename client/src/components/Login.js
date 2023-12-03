import React from 'react'

function Login() {
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
        <div className='p-3 bg-white w-25'>
        <form>
            <h3>Login</h3>
            <input type="text" placeholder="Username" className="form-control mb-2"/>
            <input type="password" placeholder="Password" className="form-control mb-2"/>
            <input type="button" value="Login" className="btn btn-primary"/>
        </form>
        </div>
    </div>
  )
}

export default Login