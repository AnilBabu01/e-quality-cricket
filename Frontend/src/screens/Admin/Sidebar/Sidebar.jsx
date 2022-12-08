import React from "react";
import navLogo from "../../../assets/nav-logo.png";
import add from "../../../assets/add.svg";
import order from "../../../assets/delete.svg";
import Products from "../../../assets/products.svg";
import profile from "../../../assets/profile.svg";
import reports from "../../../assets/reports.svg";
import dash from "../../../assets/dash.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="maindiv">
        <div className="adminlogodiv">
          <img src={navLogo} alt="logo" />
          <p>QualityCricket</p>
        </div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/dashboard"
              >
                {/* <img src={dash} /> */}

                <DashboardIcon style={{ marginRight: "1rem" }} />
                <spna className="linkspan"> Dashboard</spna>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/addproducts"
              >
                <img src={add} />
                <spna className="linkspan">AddProducts</spna>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/allproducts "
              >
                <img src={Products} />
                <spna className="linkspan">All Products </spna>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/orders"
              >
                <img src={order} />
                <spna className="linkspan">Order</spna>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/reports"
              >
                <img src={reports} />
                <spna className="linkspan">Reports</spna>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/profile"
              >
                <img src={profile} />
                <spna className="linkspan">Profile</spna>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
