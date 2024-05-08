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
`;

export const AboutH2 = styled.h2`
  padding-top: 5vw;
  text-align: right;
  font-size: 70px;
  font-weight: 800;
  padding-right: 40px;
  color: #519d5a;
  -webkit-text-stroke: 1px #fff;
`;

export const AboutBox = styled.div`
  grid-area: auto;
  display: flex;
  margin: 50px 0px 0px;
  inset: auto;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  width: 1440px;
  height: 1440px;
  padding: 0px 0px 720px;
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
`;

export const SkiItm = styled.li`
  position: relative;
  width: 30vw;
  height: 30vw;
  margin: 50px auto;
  border-radius: 20px;
  -webkit-perspective: 500px;
  perspective: 500px;

  &:nth-child(n + 2) {
    margin-left: 60px;
  }
`;

export const ItmBox = styled.div`
width: 100%;
height: 100%;
`
export const ColorBoxItmTxt = styled.div`
padding: 30px;
width: 100%;
height: 100%;
border-radius: 20px;
background-color: #e2b2d9;

p{
  font-weight: 700;
  text-align: center;
  font-size: 76px;
  margin: 50px 0;
}

span{
  font-size: 20px;
  width: 70px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
`

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
