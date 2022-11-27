import { useState } from "react";
import OtpInput from "react-otp-input";
import "./registerform.scss";

const VerifyMobile = ({ title, description, mobileNo, handleVerify }) => {
  const [opt, setOpt] = useState("");

  return (
    <form onSubmit={handleVerify} className="verify-form">
      <div className="verify-heading">{title}</div>
      <div className="verify-desc">{description}</div>
      <div className="mobile-no">{mobileNo}</div>
      <div className="input-group">
        <label htmlFor="otp">OTP</label>
        <OtpInput
          id="otp"
          value={opt}
          className=""
          onChange={setOpt}
          numInputs={6}
          containerStyle="otp-container"
          inputStyle="otp-input"
          separator={<span style={{ margin: "0.2rem" }}> </span>}
        />
      </div>

      <div className="verify-btn-container">
        <button type="submit" className="verify-btn">
          Verify
        </button>
      </div>
    </form>
  );
};

export default VerifyMobile;
