import "./register.scss";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div class="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="heading">Create Account</div>
        <div className="input-group">
          <label htmlFor="full-name">Full name</label>
          <input
            required
            type="text"
            id="full-name"
            placeholder="enter full name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile-number">Mobile Number</label>
          <input
            required
            type="tel"
            id="mobile-number"
            placeholder="enter mobile number"
          />
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
          <div>*At least six characters</div>
        </div>
        <div className="input-group">
          <button className="register-btn">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
