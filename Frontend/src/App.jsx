import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import EmailLogin from "./components/auth/EmailLogin/EmailLogin";

import CreatePassword from "./components/auth/createPassword/CreatePassword";
import NewLogin from "./components/auth/NewLogin/NewLogin";
import PareForgot from "./components/auth/PareForgot/PareForgot";

import Header from "./components/header/Header";
import CreatePassword from "./components/auth/createPassword/CreatePassword";
import Home from "./screens/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/phonelogin" element={<NewLogin/>} />
          <Route path="/forgot" element= {<PareForgot/>} />
          {/* <Route path="/forget" element={<Forgot />} /> */}
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
