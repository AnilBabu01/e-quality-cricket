import React from "react";
import ProductCard from "../card/ProductCard";
import "./style.scss";
import data from "../../../JSON_DB/topSellerItems";
const TopSellers = () => {
  return (
    <div className="top-sellers-container">
      <div className="heading">Top Sellers</div>
      <div className="product-cards-container">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
