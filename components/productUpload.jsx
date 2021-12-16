import React from "react";

const ProductUpload = () => {
  return (
    <div className="container">
      <select name="storageSelect" id="storageSelect">
        <option value="">선택</option>
        <option value="refrigerate">냉장</option>
        <option value="freeze">냉동</option>
        <option value="roomTemperature">실온</option>
      </select>
      <input className="imageUpLoad" type="file" />
      <select name="category" id="category">
        <option value="">선택</option>
        <option value="">과일</option>
        <option value="">완제품/요리</option>
        <option value="">유제품</option>
        <option value="">음료</option>
        <option value="">인스턴스</option>
        <option value="">채소</option>
      </select>
      <input className="productName" type="text" placeholder="상품이름" />
      <input className="quatity" type="text" placeholder="수량" />
      <span className="expirationDate">
        유통기한
        <input className="date" type="date" />
      </span>
      <button className="registration">등록</button>
    </div>
  );
};

export default ProductUpload;
