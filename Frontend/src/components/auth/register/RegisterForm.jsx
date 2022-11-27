import { useState } from "react";
import "./registerform.scss";
import VerifyMobile from "./VerifyMobile";
const Register = () => {
  const [verify, setVerify] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setVerify(true);
  };
  const handleVerify = (e) => {
    e.preventDefault();
  };
  const RegisterInputs = () => {
    return (
      <form onSubmit={handleSubmit} className="register-form">
        <div className="heading">Create Account</div>
        <div className="input-group">
          <label htmlFor="full-name">Full name</label>
          <input
            name="full-name"
            required
            type="text"
            id="full-name"
            placeholder="enter full name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile-number">Mobile Number</label>
          <input
            name="mobile-number"
            required
            type="tel"
            id="mobile-number"
            placeholder="enter mobile number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            required
            type="email"
            id="email"
            placeholder="enter email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            required
            type="password"
            id="password"
            placeholder="enter password"
          />
          <div>*At least six characters</div>
        </div>
        <div className="input-group">
          <button type="submit" className="register-btn">
            Continue
          </button>
        </div>
      </form>
    );
  };
  return (
    <>
      {!verify ? (
        <RegisterInputs />
      ) : (
        <VerifyMobile
          title={"Verify Mobile Number"}
          description={"We have send the OTP to your mobile number"}
          handleVerify={handleVerify}
          mobileNo={mobileNo || "0123456878"}
        />
      )}
    </>
  );
};

export default Register;
