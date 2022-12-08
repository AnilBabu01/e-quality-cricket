import React, { useEffect } from "react";
import "./Profile.css";
const Profile = ({ setopendashboard }) => {
  useEffect(() => {
    setopendashboard(true);
  }, []);
  return (
    <>
      <div className="dashboarddiv">Profile</div>
    </>
  );
};

export default Profile;
