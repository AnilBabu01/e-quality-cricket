import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import EmailLogin from "./components/auth/EmailLogin/EmailLogin";
import Navigation from "./components/header/Navigation";
import PhoneLogin from "./components/auth/Phonelogin/PhoneLogin";
import Forgot from "./components/auth/Forgot/Forgot";
import CreatePassword from "./components/auth/createPassword/CreatePassword";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/phone" element={<PhoneLogin />} />
          <Route path="/forget" element={<Forgot />} />
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
