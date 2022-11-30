import "./style.scss";
import data from "../../../JSON_DB/featuredProductItems";
import ProductCard from "../card/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
const FeaturedProducts = () => {
  const filterCategoriesSet = new Set(data.map((item) => item.category));
  const filterCategories = Array.from(filterCategoriesSet);
  const [filterCategory, setFilterCategory] = useState("");

  const filteredData = data.filter((item) => {
    if (filterCategory === "") return item;
    return item.category === filterCategory;
  });

  return (
    <div className="featured-products-container">
      <div className="heading">Featured Products</div>
      <div className="featured-product__filter">
        <div
          className={`filter-options ${
            filterCategory === "" ? "active-filter" : ""
          }`}
          onClick={() => setFilterCategory("")}
        >
          All products
        </div>
        {filterCategories.map((category) => (
          <div
            className={`filter-options ${
              category === filterCategory ? "active-filter" : ""
            }`}
            key={category}
            onClick={() => setFilterCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="product-cards-container">
        {filteredData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="view-all-btn-container">
        <Link to="/products" className="view-all-btn">
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
