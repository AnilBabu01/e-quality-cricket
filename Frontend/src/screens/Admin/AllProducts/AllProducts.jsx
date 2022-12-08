import React, { useEffect } from "react";
import "./AllProducts.css";
const AllProducts = ({ setopendashboard }) => {
  useEffect(() => {
    setopendashboard(true);
  }, []);
  return (
    <>
      <div className="dashboarddiv">AllProducts</div>
    </>
  );
};

export default AllProducts;
