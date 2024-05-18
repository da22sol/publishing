import styled, { keyframes } from "styled-components";

export const TitleH1 = styled.h1`
  font-size: 228px;
  color: #f6edd9;
  text-align: left;
  font-family: "asterisk-sans-variable", sans-serif;
  line-height: 0px;
  position: absolute;
  left: 24px;
  top: 126px;
  display: flex;
  align-items: center;
  font-weight: 800;
  @media (max-width: 1024px) {
    font-size: 150px;
  }
  @media (max-width: 820px) {
    font-size: 130px;
  }
  @media (max-width: 430px) {
    font-size: 60px;
  }
    @media (max-width: 3600px) {
    font-size: 50px;
  }
`;

export const TitleP = styled.p`
  font-size: 38px;
  color: #f6edd9;
  font-family: "asterisk-sans-variable", sans-serif;
  position: absolute;
  left: 24px;
  top: 217px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 1.3px;
  @media (max-width: 1024px) {
    font-size: 26px;
    top: 227px;
  }
  @media (max-width: 820px) {
    font-size: 19px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
    top: 175px;
    left: 15px;
  }
`;

export const Line1 = styled.div`
  border-style: solid;
  border-color: #f6edd9;
  border-width: 1px 0 0 0;
  width: 95%;
  height: 0px;
  position: absolute;
  left: 24px;
  top: 211px;
  @media (max-width: 430px) {
    left: 15px;
    top: 173px;
  }
`;

export const Line2 = styled.div`
  border-style: solid;
  border-color: #f6edd9;
  border-width: 1px 0 0 0;
  width: 95%;
  height: 0px;
  position: absolute;
  left: 24px;
  top: 270px;
  @media (max-width: 430px) {
    left: 15px;
    top: 217px;
  }
`;

export const Star = styled.span`
  text-align: center;
  font-family: "asterisk-sans-variable", sans-serif;
  font-size: 600px;

  position: relative;
  left: 26%;
  margin-top: 220px;
  display: inline-block;
  height: 364px;
  color: #e2b2d9;
  @media (max-width: 1024px) {
    font-size: 400px;
    left: 23%;
    margin-top: 179px;
  }
  @media (max-width: 820px) {
    left: 12%;
    font-size: 360px;
    margin-top: 160px;
  }

  @media (max-width: 430px) {
    font-size: 120px;
    left: -10%;
    margin-top: 70px;
  }
`;

export const StarContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (max-width: 430px) {
    gap: 10px;
  }
`;

export const Title = styled.div`
  margin-top: 40px;
  min-height: 90vh;
`;

export const Msg = styled.div`
  background-color: #468cf3;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='white' stroke-width='25' stroke-dasharray='2%2c 6' stroke-dashoffset='28' stroke-linecap='butt'/%3e%3c/svg%3e");
  width: 150px;
  height: 150px;
  position: relative;
  cursor: pointer;
  margin-left: 30px;
  border-radius: 50%;
  top: -10px;
  a {
    color: #fff;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: 400;
  }
  @media (max-width: 430px) {
    width: 80px;
    height: 80px;

    a {
      font-size: 12px;
    }
  }
`;
