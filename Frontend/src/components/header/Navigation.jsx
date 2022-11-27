import React from "react";
import { Outlet, Link } from "react-router-dom";
import navLogo from "../../assets/nav-logo.png";
import "./navigation.scss";
const navItems = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Sale",
    href: "",
  },
  {
    name: "Accessories",
    href: "",
  },
  {
    name: "All Products",
    href: "",
  },
  {
    name: "Contact Us",
    href: "",
  },
];
const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <img src={navLogo} alt="logo" />
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <li className="nav-item" key={item.name}>
                {/* <NavLink
            to={item.href}
            style={({ isActive }) =>
              isActive ? "active-nav" : ""
            }
          >{item.name}</NavLink>*/}
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="nav-action">
          <button>Login</button>
        </div>
      </div>
      {/* <Outlet /> */}
    </nav>
  );
};

export default Navigation;
