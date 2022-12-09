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
                <span className="linkspan"> Dashboard</span>
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
                <span className="linkspan">AddProducts</span>
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
                <span className="linkspan">All Products </span>
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
                <span className="linkspan">Order</span>
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
                <span className="linkspan">Reports</span>
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
                <span className="linkspan">Profile</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
