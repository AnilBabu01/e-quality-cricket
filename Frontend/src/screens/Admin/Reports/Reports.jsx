import React, { useEffect } from "react";
import "./Reports.css";
const Reports = ({ setopendashboard }) => {
  useEffect(() => {
    setopendashboard(true);
  }, []);
  return (
    <>
      <div className="dashboarddiv">Reports</div>
    </>
  );
};

export default Reports;
