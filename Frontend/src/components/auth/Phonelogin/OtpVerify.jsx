import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import "./phonelogin.scss";

const OtpVerify = ({ title, description, mobileNo, handleVerify }) => {
  const [otp, setOtp] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (otp.length < 6) return;
        handleVerify(otp);
      }}
      className="verify-form"
    >
      <div className="verify-heading">{title}</div>
      <div className="verify-desc">{description}</div>
      <div className="mobile-no">{mobileNo}</div>
      <div className="input-group">
        <label htmlFor="otp">OTP</label>
        <OtpInput
          id="otp"
          value={otp}
          className=""
          onChange={setOtp}
          numInputs={6}
          containerStyle="otp-container"
          inputStyle="otp-input"
          separator={<span style={{ margin: "0.2rem" }}> </span>}
        />
      </div>

      <div className="verify-btn-container">
        <Link  to="/home" type="submit" className="verify-btn">
          Verify
        </Link>
      </div>
    </form>
  );
};

export default OtpVerify;
