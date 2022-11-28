
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePassword from './screens/Auth/createPassword/CreatePassword';
import EmailLogin from './screens/Auth/EmailLogin/EmailLogin';
import Forgot from './screens/Auth/Forgot/Forgot';
import PhoneLogin from "./screens/Auth/Phonelogin/PhoneLogin"


function App() {

  return (
    <Router>

    <div className="App">
    <Routes>
        <Route path="/" element={<EmailLogin />}/>
        <Route path="/phone" element={<PhoneLogin />} />
        <Route path="/forget" element={<Forgot />} />
        <Route path="/create" element={<CreatePassword />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
