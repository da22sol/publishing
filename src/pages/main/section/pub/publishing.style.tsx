import styled from "styled-components";

export const Pub = styled.div`
  width: 100%;
  background: #fff;
  font-family: "Pretendard";
  position: -webkit-sticky;
  position: sticky;
  
`;

export const PubH2 = styled.h2`
  padding: 80px 50px;
  text-align: right;
  font-size: 70px;
  font-weight: 800;
  color: #fff;
  -webkit-text-stroke: 1px #519d5a;
  @media (max-width: 430px) {
    text-align: center;

    font-size: 56px;
  }
`;

export const PubBox = styled.div`
  height: 100vh;
  width: 100%;
`;

export const port = styled.div`
  background-color: #519d5a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 1023px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 769px) {
    flex-wrap: wrap;
  }
`;

export const PubImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 700px;
    max-height: 650px;
  }
  @media (max-width: 1024px) {
    img {
      width: 500px;
    }
  }
  @media (max-width: 430px) {
    img {
      width: 300px;
      max-height: 250px;
    }
  }
`;
export const PubTxt = styled.div`
  overflow: visible;
  text-align: center;
  color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 2;
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    padding: 5vw 0;
    p {
      line-height: 1.4;
      font-size: 16px;
    }
  }
  @media (max-width: 430px) {
    margin-top: 10px;
    p {
      font-size: 14px;
      line-height: 1.2;
    }
  }
`;
export const PubH4 = styled.h4`
  line-height: 1;
  font-size: 25px;
  font-style: italic;
`;

export const PubTH2 = styled.h2`
  font-size: 45px;
  padding: 18px 0;
  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

export const SiteBtn = styled.div`
  overflow: visible;
  margin: 24px 0;

  a {
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 15%;
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    color: #fff;
  }

  a:hover {
    background-color: #f6edd9;
    border: 1px solid #f6edd9;
    color: #000;
  }
`;

export const deajeon = styled.div`
  background-color: #e7f2e4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 1023px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 769px) {
    flex-wrap: wrap;
  }
`;

export const PubTxtB = styled.div`
  overflow: visible;
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6vw;
  @media (max-width: 1024px) {
    padding: 5vw 0;
  }
  @media (max-width: 430px) {
    margin-top: 10px;
    p {
      font-size: 14px;
      line-height: 1.2;
    }
  }
`;

export const SiteBtn2 = styled.div`
  overflow: visible;
  margin: 24px 0;
  a {
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 15%;
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    color: #000;
  }

  a:hover {
    background-color: #69b97c;
    border: 1px solid #69b97c;
    color: #fff;
  }
`;

export const company = styled.div`
  background-color: #ae3b4d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 1023px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 769px) {
    flex-wrap: wrap;
  }
`;
export const SiteBtn3 = styled.div`
  overflow: visible;
  margin: 24px 0;
  a {
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 15%;
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    color: #fff;
  }

  a:hover {
    background-color: #a31f33;
    border: 1px solid #a31f33;
    color: #000;
  }
`;
