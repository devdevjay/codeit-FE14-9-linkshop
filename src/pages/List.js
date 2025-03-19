import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopItem from "../components/ShopItem";
import "../styles/styles.css";
import logoImage from "../assets/logo.png";

function List() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchShops = async () => {
      try {
        console.log("API 요청 시작...");
        const response = await fetch(
          "https://linkshop-api.vercel.app/14-4/linkshops"
        );
        if (!response.ok) {
          throw new Error("데이터를 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        console.log("API 응답 데이터:", data);

        // API 응답 구조에 맞게 데이터 처리
        setShops(data.list || []);
        setNextCursor(data.nextCursor);
        setLoading(false);
      } catch (error) {
        console.error("API 요청 오류:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  // 검색어에 따라 필터링된 상점 목록
  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 검색어 변경 핸들러
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading-message">데이터를 불러오는 중입니다...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">오류: {error}</div>
      </div>
    );
  }

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
          value={searchTerm}
          onChange={handleSearchChange}
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

      {filteredShops.length === 0 ? (
        <div className="empty-message">
          {searchTerm
            ? `"${searchTerm}"에 대한 검색 결과가 없습니다.`
            : "표시할 상점이 없습니다."}
        </div>
      ) : (
        <div className="shop-grid">
          {filteredShops.map((shop) => (
            <ShopItem
              key={shop.id}
              profileColor="#FC8181"
              name={shop.name}
              username={`@${shop.userId}`}
              likes={shop.likes}
              productCount={shop.productsCount}
              products={shop.products.map((product) => product.imageUrl)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
