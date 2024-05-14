import styled from "styled-components";

export const ToyInfo = styled.div`
  width: 100%;
  background: #fff;
  padding-top: 20vw;
  font-family: "Pretendard";
`;
export const ToyH2 = styled.h2`
  padding-top: 5vw;
  text-align: right;
  font-size: 70px;
  font-weight: 800;
  padding-right: 40px;
  color: #fff;
  -webkit-text-stroke: 1px #519d5a;
  @media (max-width: 430px) {
    text-align: center;
    padding-right: 0;
    font-size: 56px;
  }
`;

export const ToyBox = styled.div`
  margin: 80px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  text-align: right;
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
  @media (max-width: 820px) {
    flex-wrap: nowrap;
  }
`;

export const InfoTxt = styled.div`
  width: 40%;
  margin: 30px 40px;
  padding-bottom: 100px;

  p {
    font-weight: 400;
    font-size: 12px;
    width: 54%;
    line-height: 1.2;
    float: right;
    text-align: justify;
  }
  @media (max-width: 430px) {
    width: 100%;
    p {
      width: 45%;
    }
  }
`;

export const InfoH4 = styled.h4`
  font-size: 18px;
  line-height: 1.6;
  color: #464646;

  @media (max-width: 820px) {
    letter-spacing: -0.5px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

export const InfoH3 = styled.h3`
  display: inline-block;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.6;

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

export const InfoH3_1 = styled.h3`
  display: inline-block;
  font-weight: 600;
  font-size: 40px;
  color: #339af0;
  line-height: 1.6;
  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

export const SiteBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
  overflow: visible;
  a {
    padding: 10px;
    border: 1px solid #339af0;
    border-radius: 10px;
    text-align: center;

    font-size: 12px;
  }
  a:hover {
    background-color: #339af0;
    color: #fff;
  }
  @media (max-width: 430px) {
    bottom: 14vw;

    a {
      padding: 6px;
      font-size: 10px;
    }
  }
`;
export const InfoImg = styled.div`
  width: 500px;
  img {
    width: 500px;
  }
  @media (max-width: 430px) {
    width: 200px;
    position: absolute;
    bottom: 87px;
    left: 0;
    img {
      width: 200px;
      max-height: 150px;
    }
  }
`;
export const ToyBox2 = styled.div`
  margin: 80px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  text-align: right;
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
    @media (max-width: 820px) {
    flex-wrap: nowrap;
  }
`;

export const InfoH3_2 = styled.h3`
  display: inline-block;
  font-weight: 600;
  font-size: 40px;
  color: #a389cb;
  line-height: 1.6;
  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

export const SiteBtn2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
  overflow: visible;
  a {
    padding: 10px;
    border: 1px solid #a389cb;
    border-radius: 10px;
    text-align: center;

    font-size: 12px;
  }
  a:hover {
    background-color: #a389cb;
    color: #fff;
  }
  @media (max-width: 430px) {
    bottom: 14vw;

    a {
      padding: 6px;
      font-size: 10px;
    }
  }
`;
