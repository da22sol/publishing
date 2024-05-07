import styled from "styled-components";
import React from "react";
import Chall1 from "../../../assets/image/chall1.png";
import Furniture from "../../../assets/image/Furniture.png";
import * as S from "../toy/toy.style";
const Toy = () => {
  return (
    <>
      <S.ToyInfo>
        <S.ToyH2>TOYPROJECT</S.ToyH2>
        <S.ToyBox>
          <S.InfoTxt>
            <S.InfoH4>함께 도전하는 즐거움! 챌리니즈 입니다</S.InfoH4>
            <S.InfoH3>첫번째 프로젝트</S.InfoH3>{" "}
            <S.InfoH3_1>챌리니즈</S.InfoH3_1>
            <p>
              나에게 필요한 좋은 습관들 혼자 하기 힘드신가요?
              <span>
                아침기상, 운동, 책읽기, 취미연습까지 나에게 필요한 작은 도전들,
              </span>
              같은 목표를 가진 사람들과 함께 도전하면 끝까지 해낼 수 있습니다.{" "}
              <span>이제는 작심 3일이 아닌 작심 30일은 해봅시다!</span>
            </p>
            <S.SiteBtn>
              <a href="https://github.com/challeniz/front-end">git에서보기</a>{" "}
              <a href="https://frosted-brook-b69.notion.site/fa600e7671cf4c41837935218b8c048b">
                코드리뷰
              </a>
            </S.SiteBtn>
          </S.InfoTxt>
          <S.InfoImg>
            <img src={Chall1} alt="토이프로젝트_챌린지" className="ChallImg1" />
          </S.InfoImg>
        </S.ToyBox>
        <S.ToyBox2>
          <S.InfoTxt>
            <S.InfoH4>
              상품을 빠르고 편리하게 구매가능한 CURD 기반 가구 쇼핑몰!
            </S.InfoH4>
            <S.InfoH3>두번째 프로젝트</S.InfoH3>{" "}
            <S.InfoH3_2>앨리스퍼니쳐</S.InfoH3_2>
            <p>
              트렌디하고 실용적인 가구를 저렴하게 구매할 수있는 가구쇼핑몰 사회
              초년생들의 가구 구매를 위해 만든 쇼핑몰입니다
            </p>
            <S.SiteBtn2>
              <a href="https://frosted-brook-b69.notion.site/b442d6718bdf4ad48c28d63654889530?pvs=4">
                코드리뷰
              </a>
            </S.SiteBtn2>
          </S.InfoTxt>
          <S.InfoImg>
            <img
              src={Furniture}
              alt="토이프로젝트_가구쇼핑몰"
              className="ChallImg1"
            />
          </S.InfoImg>
        </S.ToyBox2>
      </S.ToyInfo>
    </>
  );
};

export default Toy;
