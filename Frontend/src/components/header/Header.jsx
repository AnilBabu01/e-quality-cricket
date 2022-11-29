import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/nav-logo.png";
import "./header.scss";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { secondaryColor } from "../../utils/colorVariables";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Sale",
    href: "/sale",
  },
  {
    name: "Accessories",
    href: "/accessories",
  },
  {
    name: "All Products",
    href: "/products",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const StyledBadge = styled(BadgeUnstyled)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Inter',IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 10%;
    right: 10%;
    display: grid;
    place-content: center;
    aspect-ratio:1;
    height: 1rem;
    color: #fff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    white-space: nowrap;
    background: ${secondaryColor};
    border-radius: 2px;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `
);
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  return (
    <nav className="nav-container">
      <div className="nav">
        <img src={navLogo} alt="logo" />
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) =>
                  isActive ? "active-nav nav-item" : "nav-item"
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </ul>
        <div className="nav-action">
          {isLoggedIn ? (
            <Box sx={{ display: { md: "flex" }, gap: "1.5rem" }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => setNotificationCount((prev) => prev + 1)}
              >
                <StyledBadge badgeContent={notificationCount || "0"}>
                  <NotificationsNoneOutlinedIcon
                    sx={{
                      height: 27,
                      width: 25,
                      display: "grid",
                      placeContent: "center",
                    }}
                  />
                </StyledBadge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => setCartCount((prev) => prev + 1)}
              >
                <StyledBadge badgeContent={cartCount || "0"}>
                  <ShoppingCartOutlinedIcon
                    sx={{
                      height: 27,
                      width: 25,
                      display: "grid",
                      placeContent: "center",
                    }}
                  />
                </StyledBadge>
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 35, height: 35, marginRight: "11px" }}
                />
                <Typography
                  sx={{
                    size: "14px",
                    lineHeight: "17px",
                  }}
                >
                  user
                </Typography>
                <IconButton size="small" aria-label="more">
                  <ArrowDropDownOutlinedIcon
                    size="large"
                    sx={{ color: secondaryColor }}
                  />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Link to="/">
              <button className="login-btn">Login</button>
            </Link>
          )}
        </div>
      </div>
      {/* <Outlet /> */}
    </nav>
  );
};

export default Navigation;
