import React from "react";
import { Link } from "react-router-dom";
import ShopItem from "../components/ShopItem";
import "../styles/styles.css";
import logoImage from "../assets/logo.png";

function Home() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/list" className="logo">
          <img src={logoImage} alt="LINK SHOP" className="logo-image" />
        </Link>
        <Link to="/linkpost" className="create-button">
          생성하기
        </Link>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="샵 이름으로 검색해 보세요."
          className="search-input"
        />
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <div className="shop-grid">
        {/* Shop Item 1 */}
        <ShopItem
          profileColor="#FC8181"
          name="나구리 워구성형"
          username="@pumpkinraccoon"
          likes={65}
          productCount={8}
          products={[
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
          ]}
        />

        {/* Shop Item 2 */}
        <ShopItem
          profileColor="#4299E1"
          name="구파발 보따리"
          username="@hibottari"
          likes={38}
          productCount={2}
          products={[
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
          ]}
        />

        {/* Shop Item 3 */}
        <ShopItem
          profileColor="#FC8181"
          name="COCO선배"
          username="@sleep_sound"
          likes={24}
          productCount={3}
          products={[
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
          ]}
        />

        {/* Shop Item 4 */}
        <ShopItem
          profileColor="#FC8181"
          name="나구리 직구성형"
          username="@pumpkinraccoon"
          likes={65}
          productCount={8}
          products={[
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
          ]}
        />

        {/* Shop Item 5 */}
        <ShopItem
          profileColor="#4299E1"
          name="구파발 보따리"
          username="@hibottari"
          likes={38}
          productCount={2}
          products={[
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
          ]}
        />

        {/* Shop Item 6 */}
        <ShopItem
          profileColor="#FC8181"
          name="COCO선배"
          username="@sleep_sound"
          likes={24}
          productCount={3}
          products={[
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
            "/placeholder.svg?height=80&width=80",
          ]}
        />
      </div>
    </div>
  );
}

export default Home;
