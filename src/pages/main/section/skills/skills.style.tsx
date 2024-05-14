import styled, { css } from "styled-components";

const commonBoxStyles = css`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const About = styled.div`
  width: 100%;
  background: #519d5a;
  padding-top: 15vw;
  font-family: "Pretendard";
  position: relative;
  overflow: visible;
  max-height: 1480px;
  @media (max-width: 820px) {
    max-height: none;
  }
  
}
`;

export const AboutH2 = styled.h2`
  padding-top: 5vw;
  text-align: right;
  font-size: 70px;
  font-weight: 800;
  padding-right: 40px;
  color: #519d5a;
  -webkit-text-stroke: 1px #fff;
  @media (max-width: 430px) {
    text-align: center;
    padding-right: 0;
  }
`;

export const AboutBox = styled.div`
  grid-area: auto;
  display: flex;
  margin: 50px 0px 0px;
  inset: auto;
  position: relative;
  box-sizing: border-box;
  width: 1440px;
  height: 1440px;
  padding: 0px 0px 720px;
  overflow: visible;
  @media (max-width: 820px) {
    width: 100%;
    flex-direction: column;
    height: 1000px;
  }
  @media (max-width: 430px) {
    height: 2000px;
  }
`;

export const SkiList = styled.ul`
  height: 50vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin-top: 50px;
  padding-left: 25px;
  padding-bottom: 50px;
  @media (max-width: 1023px) {
    gap: 25px;
    padding-right: 25px;
    flex-wrap: wrap;
    height: auto;
  }
`;

export const SkiItm = styled.li`
  overflow: visible;
  width: 30vw;
  height: 30vw;
  margin: 50px auto;
  border-radius: 20px;
  -webkit-perspective: 500px;
  perspective: 500px;
  transform-style: preserve-3d;
  &:nth-child(n + 2) {
    margin-left: 60px;
  }
  &:hover .ItmBox {
    transform: rotateY(180deg);
  }
  @media (max-width: 1023px) {
    margin: 0;
    width: calc(50% - 12.5px);
    &:nth-child(n + 2) {
      margin-left: 0;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 70vw;
  }
`;

export const ItmBox = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
  overflow: visible;
`;

export const BackBox = styled.div`
  z-index: 15;
  position: absolute;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  padding: 30px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #f6edd9;
  left: 0;
  top: 0;
  backface-visibility: hidden;
`;
export const ColorBoxItmTxt = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #e2b2d9;
  backface-visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  p {
    font-weight: 700;
    text-align: center;
    font-size: 60px;
    margin: 50px 0;
    letter-spacing: 2px;
  }

  span {
    font-size: 20px;
    width: 70px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  @media (max-width: 1024px) {
    p {
      font-weight: 700;
      text-align: center;
      font-size: 50px;
      margin: 20px 0;
      letter-spacing: 2px;
    }
  }
`;

export const HBox = styled.div`
  ${commonBoxStyles}
  background-color: #fa5026;
`;

export const CBox = styled.div`
  ${commonBoxStyles}
  background-color: #2f80ed;
`;

export const JBox = styled.div`
  ${commonBoxStyles}
  background-color: #ffcc00;
`;

export const RBox = styled.div`
  ${commonBoxStyles}
  background-color: #61dafb;
`;

export const TBox = styled.div`
  ${commonBoxStyles}
  background-color: #2f80ed;
`;
export const PBox = styled.div`
  ${commonBoxStyles}
  background-color: #f8e276;
  font-size: 30px;
`;
export const BackTxt = styled.div`
  font-size: 14px;
  padding-top: 8vw;
  font-weight: 500;

  p {
    padding-bottom: 10px;
    line-height: 1.4;
    letter-spacing: -1px;
  }
`;
