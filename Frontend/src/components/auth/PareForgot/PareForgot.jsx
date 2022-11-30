import { useState } from "react";
import "./PareForgot.scss";
import VerifyForgot from "./VerifyForgot";

const PareForgot = () => {
    const [verify, setVerify] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const { emailAddress } = Object.fromEntries(
            new FormData(e.currentTarget)
            );
            console.log({ emailAddress });
            console.log({email});
            setVerify(true);
            setEmail(emailAddress)
    };

    const handleVerify = (otp) => {
        console.log({ otp });
        setVerify(false);
        setEmail(emailAddress)
    };

    const EmailInput = () => {
        return (
            <div className="forgot-container">
                <form onSubmit={handleSubmit} className="forgot-form">
                    <div className="heading">Forget Password</div>
                    <p>Enter the email address associated with your account.</p>
                    <div className='sendotp'>
                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input required name="email" type="email" id="email" placeholder="enter email" />
                        </div>
                    </div>

                    <div className="input-group">
                        <button type="submit" className="login-btn">continue</button>
                    </div>
                </form>
            </div>
        );
    };
    return (
        <>
            {!verify ? (
                <EmailInput />
            ) : (
                <VerifyForgot
                    title={"Verification required"}
                    description={"To continue, complete this verification step. We've sent an OTP to the email"}
                    emaildesc={"pranayshukla486@gmail.com Please enter it below to complete verification"}
                    handleVerify={handleVerify}
                />
            )}
        </>
    );
};

export default PareForgot;
