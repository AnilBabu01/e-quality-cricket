import React from 'react'
import './forgot.scss'
const Forgot = () => {
  const handleSubmit = () =>{};
  return (
    <div className='forgot-container'>
      <form onSubmit={handleSubmit} className="forgot-form">
        <div className="heading">Forget Password</div>
          <p>Enter the email address associated with your account.</p>
        <div className='sendotp'>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email" id="email" placeholder="enter email" />
        </div>
        </div>
          
        <div className="input-group">
          <button className="login-btn">continue</button>
        </div>
      </form>
    </div>
  )
}

export default Forgot