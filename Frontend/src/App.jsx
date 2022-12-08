import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import EmailLogin from "./components/auth/EmailLogin/EmailLogin";

import CreatePassword from "./components/auth/createPassword/CreatePassword";
import NewLogin from "./components/auth/NewLogin/NewLogin";
import Forgot from "./components/auth/Forgot/Forgot";

import Header from "./components/header/Header";
import Home from "./screens/Home";
import FeaturedProduct from "./components/featuredProduct/FeaturedProduct";
import Demo from "./components/demo/Demo";

import MainAdmin from "./screens/Admin/MainAdmin/MainAdmin";

import Dashboard from "./screens/Admin/Dashboard/Dashboard";
import AddProducts from "./screens/Admin/AddProducts/AddProducts";
import AllProducts from "./screens/Admin/AllProducts/AllProducts";
import Order from "./screens/Admin/Orders/Order";
import Reports from "./screens/Admin/Reports/Reports";
import Profile from "./screens/Admin/Profile/Profile";
function App() {
  const [opendashboard, setopendashboard] = useState(false);
  return (
    <Router>
      <div className="App">
        {!opendashboard && <Header />}
        {opendashboard && <MainAdmin />}
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/phonelogin" element={<NewLogin />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/featuredproducts" element={<FeaturedProduct />} />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/dashboard"
            element={<Dashboard setopendashboard={setopendashboard} />}
          />
          <Route
            path="/addproducts"
            element={<AddProducts setopendashboard={setopendashboard} />}
          />
          <Route
            path="/allproducts"
            element={<AllProducts setopendashboard={setopendashboard} />}
          />
          <Route
            path="/orders"
            element={<Order setopendashboard={setopendashboard} />}
          />
          <Route
            path="/reports"
            element={<Reports setopendashboard={setopendashboard} />}
          />
          <Route
            path="/profile"
            element={<Profile setopendashboard={setopendashboard} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
