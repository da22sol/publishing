import React from "react";
import Port from "../../../assets/image/por.png";
import Daejeon from "../../../assets/image/dae.png";
import Company from "../../../assets/image/com.png";
const Publishing = () => {
  return (
    <>
      <div className="Pub">
        <h2 className="PubH2">Publishing</h2>
        <div className="PubBox">
          <div className="port">
            <div className="PubImg">
              <img src={Port} alt="포트폴리오 이미지" />
            </div>
            <div className="PubTxt">
              <h4>1/3</h4>
              <h2>개인 포트폴리오</h2>
              <p>리액트-타입스크립트 기반으로 만든 포트폴리오 사이트</p>
           <div className="SiteBtn">
            <a href="#">git에서보기</a>
            <a href="#">코드리유</a>
           </div>
            </div>
          </div>
          <div className="deajeon">
            <div className="PubImg"></div>
            <div className="PubTxt"></div>
          </div>
          <div className="company">
            <div className="PubImg"></div>
            <div className="PubTxt"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publishing;
