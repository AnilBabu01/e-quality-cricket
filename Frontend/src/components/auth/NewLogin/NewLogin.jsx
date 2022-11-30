import { useState } from "react";
import "./NewLogin.scss";
import { Link } from 'react-router-dom';
import OtpVerify from "./OtpVerify";

const VivekPLogin = () => {
    const [verify, setVerify] = useState(false);
    const [mobileNo, setMobileNo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const { mobileNumber } = Object.fromEntries(
            new FormData(e.currentTarget)
            );
            console.log({ mobileNumber });
            setVerify(true);
        setMobileNo(mobileNo)
    };

    const handleVerify = (otp) => {
        console.log({ otp });
        setVerify(false);
        setMobileNo(mobileNo)
    };

    const MoNumberInput = () => {
        return (
            <div className="phone-container">
                <form onSubmit={handleSubmit} className="phone-form">
                    <div className="heading">Login</div>
                    <div className="button-container">
                        <Link to='/' className="navi-button">Email</Link>
                        <button className="pl-button pl-button--active" id="secondary-button">
                            Phone Number
                        </button>
                    </div>
                    <div className='sendotp'>
                        <div className="input-group">
                            <label htmlFor="tel">Phone Number</label>
                            <input required name="mobileNumber" type="tel" id="mobileNumber" placeholder="enter phone number" />
                        </div>
                    </div>

                    <div className="input-group">
                        <button type="submit" className="login-btn">Send OTP</button>
                    </div>
                    <span className="newusertag">New to Quality Cricket</span>
                    <Link to="/register" className="creatbtn">
                        Create Account
                    </Link>
                </form>
            </div>
        );
    };
    return (
        <>
            {!verify ? (
                <MoNumberInput />
            ) : (
                <OtpVerify
                    title={"Login"}
                    description={"We have send the OTP to your mobile number"}
                    handleVerify={handleVerify}
                    mobileNo={mobileNo}
                />
            )}
        </>
    );
};

export default VivekPLogin;
