import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import "../styles/styles.css";
import logoImage from "../assets/logo.png";

function Create() {
  const [password, setPassword] = useState("");
  const [product1HasInput, setProduct1HasInput] = useState(false);
  const [product2HasInput, setProduct2HasInput] = useState(false);
  const [product3HasInput, setProduct3HasInput] = useState(false);
  const [hasAnyInput, setHasAnyInput] = useState(false);

  // 모든 입력 필드의 상태를 확인하여 hasAnyInput 업데이트
  useEffect(() => {
    const anyInputExists =
      password.trim() !== "" ||
      product1HasInput ||
      product2HasInput ||
      product3HasInput;

    setHasAnyInput(anyInputExists);
    console.log("입력 상태:", {
      password: password.trim() !== "",
      product1: product1HasInput,
      product2: product2HasInput,
      product3: product3HasInput,
      hasAnyInput: anyInputExists,
    });
  }, [password, product1HasInput, product2HasInput, product3HasInput]);

  return (
    <div className="container">
      <header className="header">
        <Link to="/list" className="logo">
          <img src={logoImage} alt="LINK SHOP" className="logo-image" />
        </Link>
        <Link to="/list" className="create-button">
          돌아가기
        </Link>
      </header>

      <div className="create-form">
        <div className="section-header">
          <h2 className="section-title">대표 상품</h2>
          <Link to="/list" className="add-link">
            추가
          </Link>
        </div>

        <div className="form-sections">
          {/* Product Item 1 */}
          <ProductItem onInputChange={setProduct1HasInput} />

          {/* Product Item 2 */}
          <ProductItem onInputChange={setProduct2HasInput} />

          {/* My Shopping */}
          <div className="shopping-section">
            <h2 className="section-title">내 쇼핑몰</h2>
            <ProductItem isShort={true} onInputChange={setProduct3HasInput} />
          </div>

          {/* Password Section */}
          <div className="password-section">
            <h2 className="section-title">비밀번호</h2>
            <p className="section-description">비밀번호를 입력해주세요.</p>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className={`submit-button ${!hasAnyInput ? "disabled" : ""}`}
          style={{
            backgroundColor: hasAnyInput ? "var(--blue)" : "var(--gray-medium)",
          }}
          disabled={!hasAnyInput}
        >
          생성하기
        </button>
      </div>
    </div>
  );
}

export default Create;
