import React, { useState, useEffect } from "react";
import "../styles/styles.css";

function ProductItem({ isShort = false, onInputChange }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [hasImageInput, setHasImageInput] = useState(false);

  // input 변경 시 부모 컴포넌트에 알림
  useEffect(() => {
    if (onInputChange) {
      // isShort인 경우 이미지 첨부 여부만 확인
      // isShort가 아닌 경우 모든 필드 확인
      const hasInput = isShort
        ? hasImageInput
        : productName.trim() !== "" ||
          productPrice.trim() !== "" ||
          hasImageInput;

      onInputChange(hasInput);
    }
  }, [productName, productPrice, hasImageInput, isShort, onInputChange]);

  const handleFileButtonClick = () => {
    // 실제로는 파일 선택 로직이 들어가야 함
    // 지금은 이미지 첨부됨으로 상태 변경
    setHasImageInput(true);
  };

  return (
    <div className="product-item">
      <div className="product-header">
        <div>
          <h3 className="product-title">상품 대표 이미지</h3>
          <p className="product-description">상품 이미지를 첨부해주세요</p>
        </div>
        <button className="file-button" onClick={handleFileButtonClick}>
          {hasImageInput ? "첨부됨" : "파일 첨부"}
        </button>
      </div>

      {!isShort && (
        <>
          <div className="product-field">
            <h3 className="product-title">상품 이름</h3>
            <p className="product-description">상품 이름을 입력해 주세요.</p>
            <input
              type="text"
              placeholder="상품 이름"
              className="product-input"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="product-field">
            <h3 className="product-title">상품 가격</h3>
            <p className="product-description">원하는 표기에 주세요.</p>
            <input
              type="text"
              placeholder="상품 가격"
              className="product-input"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductItem;
