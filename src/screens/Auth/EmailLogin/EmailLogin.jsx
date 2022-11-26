import { Link } from "react-router-dom";
import "./emaillogin.scss";
const EmailLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="heading">Login</div>
        <div className="button-container">
          <button className="pl-button pl-button--active">Email</button>
          {/* <Link to='/phone'><button className="pl-button" id="secondary-button">
            Phone Number
          </button> </Link> */}
          <Link to='/phone' className="pl-button" id="secondary-button"> 
            Phone Number
           </Link>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input required type="email" id="email" placeholder="enter email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            placeholder="enter password"
          />
        </div>
        <p>Forgot Password ?</p>
          
        <div className="input-group">
          <button className="login-btn">Login</button>
        </div>
        <span className="newusertag">New to Quality Cricket</span>
      <button className='creatbtn'>Create Account</button>
      </form>
    </div>
  );
};

export default EmailLogin;
