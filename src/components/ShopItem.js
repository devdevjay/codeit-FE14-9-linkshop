import React from "react";
import "../styles/styles.css";
import heartImage from "../assets/status=fill.png";

function ShopItem({
  profileColor,
  name,
  username,
  likes,
  productCount,
  products,
}) {
  return (
    <div className="shop-item">
      <div className="shop-item-header">
        <div className="shop-profile">
          <div
            className="profile-icon"
            style={{ backgroundColor: profileColor }}
          >
            <div className="cube-icon" style={{ opacity: 1 }}></div>
          </div>
          <div className="shop-info">
            <h3 className="shop-name">{name}</h3>
            <p className="shop-username">{username}</p>
          </div>
        </div>
        <div className="shop-likes">
          <div className="heart-icon">
            <img src={heartImage} alt="좋아요" className="heart-image" />
          </div>
          <span className="likes-count">{likes}</span>
        </div>
      </div>

      <div className="product-count">
        <p>대표 상품 {productCount}</p>
      </div>

      <div className="product-thumbnails">
        {products.map((product, index) => (
          <div key={index} className="product-thumbnail">
            <img
              src={
                product && product.startsWith("http")
                  ? product
                  : "/placeholder.svg"
              }
              alt="Product thumbnail"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopItem;
