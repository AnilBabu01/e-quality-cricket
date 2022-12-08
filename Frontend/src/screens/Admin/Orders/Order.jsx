import React, { useEffect } from "react";
import "./Order.css";
const Order = ({ setopendashboard }) => {
  useEffect(() => {
    setopendashboard(true);
  }, []);
  return (
    <>
      <div className="dashboarddiv">Order</div>
    </>
  );
};

export default Order;
