
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      </Routes>
    </div>
    </Router>
  )
}

export default App
