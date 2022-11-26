import React from 'react'
import { Link } from 'react-router-dom';
import './phonelogin.scss'
const PhoneLogin = () => {
    const handleSubmit = () => {};
  return (
    <div className="phone-container">
      <form onSubmit={handleSubmit} className="phone-form">
        <div className="heading">Login</div>
        <div className="button-container">
          <Link to='/'  className="pl-button">Email</Link>
          <button className="pl-button pl-button--active" id="secondary-button">
            Phone Number
          </button>
        </div>
        <div className='sendotp'>
        <div className="input-group">
          <label htmlFor="tel">Phone Number</label>
          <input required type="tel" id="tel" placeholder="enter phone number" />
        </div>
        </div>
          
        <div className="input-group">
          <button className="login-btn">Send OTP</button>
        </div>
        <span className="newusertag">New to Quality Cricket</span>
      <button className='creatbtn'>Create Account</button>
      </form>
    </div>
  )
}

export default PhoneLogin
