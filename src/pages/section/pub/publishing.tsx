import React from "react";
import Port from "../../../assets/image/por.png";
import Daejeon from "../../../assets/image/dae.png";
import Company from "../../../assets/image/com.png";
import * as S from "../pub/publishing.style"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Publishing = () => {
  return (
    <>
      <S.Pub>
        <S.PubH2>Publishing</S.PubH2>
        <S.PubBox>
          <S.port>
            <S.PubImg>
              <img src={Port} alt="포트폴리오 이미지" />
            </S.PubImg>
            <S.PubTxt>
              <S.PubH4>1/3</S.PubH4>
              <S.PubTH2>개인 포트폴리오</S.PubTH2>
              <p>리액트-타입스크립트 기반으로 만든 개인포트폴리오 사이트</p>
              <S.SiteBtn>
                <a href="#">git에서보기</a>
                <a href="#">코드리뷰</a>
              </S.SiteBtn>
            </S.PubTxt>
          </S.port>
          </S.PubBox>

          <S.PubBox>
            <S.deajeon>
              <S.PubImg>
              <img src={Daejeon} alt="포트폴리오 이미지" />
              </S.PubImg>
              <S.PubTxtB>
              <S.PubH4>1/3</S.PubH4>
                <S.PubTH2>대전광역시 사회서비스원</S.PubTH2>
                <p>공식사이트와 타지역사이트 디자인을 참고하며 만들었습니다.</p>
                <p> 웹 접근성을 준수하여만들었고 반응형 웹사이트입니다</p>
                <S.SiteBtn2>
                  <a href="#">git에서보기</a>
                  <a href="#">코드리뷰</a>
                </S.SiteBtn2>
              </S.PubTxtB>
            </S.deajeon>
          </S.PubBox>
         <S.PubBox>
            <S.company>
              <S.PubImg> <img src={Company} alt="포트폴리오 이미지" /></S.PubImg>
              <S.PubTxt>
              <S.PubH4>1/3</S.PubH4>
                <S.PubTH2>컴퍼니 회사 사이트</S.PubTH2>
                <p>가상의 회사 사이트를 gdweb를 참고하여 만들었습니다.</p>
                <p> fullPage.js 이루어진 반응형 웹사이트입니다</p>
                <S.SiteBtn3>
                  <a href="#">git에서보기</a>
                  <a href="#">코드리뷰</a>
                </S.SiteBtn3>
              </S.PubTxt>
            </S.company>
       
         </S.PubBox>
      </S.Pub>
    </>
  );
};

export default Publishing;
