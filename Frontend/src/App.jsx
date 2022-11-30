import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import EmailLogin from "./components/auth/EmailLogin/EmailLogin";
import Navigation from "./components/header/Navigation";
import CreatePassword from "./components/auth/createPassword/CreatePassword";
import NewLogin from "./components/auth/NewLogin/NewLogin";
import PareForgot from "./components/auth/PareForgot/PareForgot";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/phonelogin" element={<NewLogin/>} />
          <Route path="/forgot" element= {<PareForgot/>} />
          {/* <Route path="/forget" element={<Forgot />} /> */}
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
