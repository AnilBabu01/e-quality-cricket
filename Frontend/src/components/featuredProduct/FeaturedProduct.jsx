import "./Featured-style.scss";
import data from "../../JSON_DB/featuredProductItems";
import ProductCard from "../home/card/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NewFooter from "../TestFooter/NewFooter";
import Filterproduct from "../filterproduct/Filterproduct";
const FeaturedProduct = () => {
  const filterCategoriesSet = new Set(data.map((item) => item.category));
  const filterCategories = Array.from(filterCategoriesSet);
  const [filterCategory, setFilterCategory] = useState("");

  const filteredData = data.filter((item) => {
    if (filterCategory === "") return item;
    return item.category === filterCategory;
  });

  return (
    <div className="main-container">
    <div className="main-featured-products-container">
      <div className="heading">Featured Products</div>
      <div className="search-field">
            <input type="search" className="input-search" placeholder="Search Products"/>
            <button className="btn-pricefilter">Price, high to low <ExpandMoreRoundedIcon className="down-arw"/></button>
      </div> 
      <div className="filter">
        <Filterproduct/>
      </div>
      <div className="main-product-cards-container">
        {filteredData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
      <div className="next-page">
        <Link to="/" className="view-all-btn">
          1
        </Link>
        <Link to="/" className="view-all-btn">
          2
        </Link>
        <Link to="/" className="view-all-btn">
          3
        </Link>
      </div>
    <NewFooter/>
    </div>
  );
};

export default FeaturedProduct;
