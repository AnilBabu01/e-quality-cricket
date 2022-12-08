import React from "react";
import search from "../../../assets/search.svg";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { secondaryColor } from "../../../utils/colorVariables";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import "./AdminHeader.css";
const AdminHeader = () => {
  const location = useLocation();
  return (
    <>
      <div className="adminmainheader">
        <div className="adminnavbar">
          <p>
            {location.pathname.slice(1).charAt(0).toUpperCase() +
              location.pathname.slice(2)}
          </p>
          <div className="rightmaindiv">
            <div className="searchmaindiv">
              <input type="text" placeholder="Search" />
              <button className="searchbtn">
                <img src={search} alt="search" />
              </button>
            </div>
            <div className="profilemaindiv">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  variant="rounded"
                  sx={{
                    width: 35,
                    height: 35,
                    marginRight: "11px",
                    marginTop: "5px",
                    marginLeft: "11px",
                  }}
                />
                <Typography
                  sx={{
                    size: "14px",
                    lineHeight: "17px",
                  }}
                >
                  Pranay
                </Typography>
                <IconButton size="small" aria-label="more">
                  <ArrowDropDownOutlinedIcon
                    size="large"
                    sx={{ color: secondaryColor }}
                  />
                </IconButton>
              </Box>
            </div>
          </div>
        </div>
        <div className="sliderdiv">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
