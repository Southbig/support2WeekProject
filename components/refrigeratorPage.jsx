import React from "react";

const RefrigeratorPage = () => {
  return (
    <div className="container">
      <button className="add">추가</button>
      <div className="refrigerator">
        냉장실
        <div className="countContainer">
          <span className="total">전체 (숫자)</span>
          <span className="danger">위험 (숫자)</span>
        </div>
      </div>
      <div className="freezer">
        냉동실
        <div className="countContainer">
          <span className="total">전체 (숫자)</span>
          <span className="danger">위험 (숫자)</span>
        </div>
      </div>
      <div className="roomTemperature">
        실온
        <div className="countContainer">
          <span className="total">전체 (숫자)</span>
          <span className="danger">위험 (숫자)</span>
        </div>
      </div>
    </div>
  );
};

export default RefrigeratorPage;
