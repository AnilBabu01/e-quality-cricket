import React from 'react'
import './CreatePassword.scss';



const CreatePassword = () => {
    const handleSubmit = () =>{};
  return (
    <div className='create-container'>
      <form onSubmit={handleSubmit} className="create-form">
        <div className="heading">Create Password</div>
          <p>Password must have</p>
          <ul>
            <li>have at least 8 character</li>
            <li>have at least one upper case</li>
            <li>have at least 8 characters have at least one uper case have at least one special character (!, %, @, #, etc.)</li>
          </ul>
        <div className='sendotp'>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email" id="email" placeholder="enter email" />
        </div>
        </div>
          
        <div className="input-group">
          <button className="login-btn">Send OTP</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePassword
