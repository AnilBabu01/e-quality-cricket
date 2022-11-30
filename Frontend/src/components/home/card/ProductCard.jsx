import "./productcard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card-container">
      <img src={item.image} alt="bat" />
      <div className="product-name">{item.name}</div>
      {!!item?.tag && (
        <div className="tag-container">
          <div className="tag">{item.tag.offer}</div>
          <div className="name">{item.tag.name}</div>
        </div>
      )}
      <div className="price-container">
        <div className="selling-price">{item.sellingPrice}</div>
        <div className="mrp">
          {`${!!item?.tag ? "MRP :" : ""} 
         
        `}
          <span>{item.costPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
