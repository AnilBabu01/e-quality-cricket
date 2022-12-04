import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import EmailLogin from "./components/auth/EmailLogin/EmailLogin";

import CreatePassword from "./components/auth/createPassword/CreatePassword";
import NewLogin from "./components/auth/NewLogin/NewLogin";
import Forgot from "./components/auth/Forgot/Forgot";

import Header from "./components/header/Header";
import Home from "./screens/Home";
import NewFooter from "./components/TestFooter/NewFooter";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/phonelogin" element={<NewLogin/>} />
          <Route path="/forgot" element= {<Forgot/>} />
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/register" element={<Auth />} />
          <Route  index path="/home" element={<Home />}>
          </Route>
          <Route path="/newfooter" element={<NewFooter/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
