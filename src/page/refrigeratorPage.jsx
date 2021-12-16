import React, { useState } from "react";
import style from "./refrigeratorPage.module.css";
import Product from "../components/product";
import { dummy } from "../dummy/dummy";

const RefrigeratorPage = () => {
  const [product, setProduct] = useState(dummy.product);

  const refrigerate = product.filter((item) => item.storage === "냉장실");
  const freeze = product.filter((item) => item.storage === "냉동실");
  const roomTemperature = product.filter((item) => item.storage === "실온");

  const handleDelete = (id) => {
    const filter = product.filter((el) => el.id !== id);
    setProduct(filter);
  };

  return (
    <>
      <button className={style.add}>추가</button>

      <div className={style.container}>
        <div className={style.refrigerator}>
          <i className="refrigerator_logo fas fa-apple-alt"></i>

          <span className={style.refrigerator_name}>냉장실</span>

          <div className={style.countContainer}>
            <span className={style.total}>
              전체
              <span className={style.total_num}>{refrigerate.length}</span>
            </span>
            <span className={style.danger}>
              위험
              <span className={style.danger_num}>3</span>
            </span>
          </div>

          {refrigerate.length !== 0 ? (
            product
              .filter((item) => item.storage === "냉장실")
              .map((el) => <Product product={el} handleDelete={handleDelete} />)
          ) : (
            <div className={style.empty}>
              <div className={style.empty_sentence}>냉장실이 비어 있습니다</div>
            </div>
          )}
        </div>
        <div className={style.freezer}>
          <i className="freezer_logo fas fa-ice-cream"></i>
          <span className={style.freezer_name}>냉동실</span>
          <div className={style.countContainer}>
            <span className={style.total}>
              전체
              <span className={style.total_num}>{freeze.length}</span>
            </span>
            <span className={style.danger}>
              위험
              <span className={style.danger_num}>3</span>
            </span>
          </div>
          {/* 삼항연산자필요 */}
          {freeze.length !== 0 ? (
            product
              .filter((item) => item.storage === "냉동실")
              .map((el) => <Product product={el} handleDelete={handleDelete} />)
          ) : (
            <div className={style.empty}>
              <div className={style.empty_sentence}>냉동실이 비어 있습니다</div>
            </div>
          )}
        </div>
        <div className={style.roomTemperature}>
          <i className="roomTemperature_logo fas fa-thermometer-half"></i>

          <span className={style.roomTemperature_name}>실온보관</span>

          <div className={style.countContainer}>
            <span className={style.total}>
              전체
              <span className={style.total_num}>{roomTemperature.length}</span>
            </span>
            <span className={style.danger}>
              위험
              <span className={style.danger_num}>3</span>
            </span>
          </div>
          {/* 삼항연산자필요 */}
          {roomTemperature.length !== 0 ? (
            product
              .filter((item) => item.storage === "실온")
              .map((el) => <Product product={el} />)
          ) : (
            <div className={style.empty}>
              <div className={style.empty_sentence}>
                실온보관이 비어 있습니다
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RefrigeratorPage;
