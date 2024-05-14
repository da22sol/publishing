import styled from "styled-components";

export const Section2 = styled.div`
  position: relative;
  padding: 30vw 0 5vw 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  ul,
  ol {
    text-align: left;
    font-size: 20px;
    line-height: 1.6;
    margin-left: 60px;
    margin-right: 20px;
    font-family: "Pretendard";
    transform: translate(50%, 30%);
  }
  li {
  }

  img {
    width: 40%;
  }
  @media (max-width: 1024px) {
    padding-top: 25vw;
  }
  @media (max-width: 780px) {
    ul {
      margin-left: 20px;
    }
  }
  @media (max-width: 430px) {
    display: block;
    padding-bottom: 30vw;
    img {
      width: 100%;
    }
  }
`;
export const Section2Txt = styled.div`
  display: flex;
  width: 600px;
  height: 330px;
  background-color: #f8e276;
  transform: translate(0, 50%);
  color: #464646;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 500px;
    height: 280px;
    ol {
      margin-left: 40px;
    }
  }
  @media (max-width: 780px) {
    transform: translate(0, 20%);
    width: 400px;
    letter-spacing: -1.6px;
  }
  @media (max-width: 430px) {
    transform: translate(0, 0);
  }
`;

export const TxtBox = styled.div`
  padding: 8vw 0 15vw;
  color: #464646;
  opacity: 0.4;
  transform: translate(40%, 10px);

  @media (max-width: 768px) {
    transform: translate(25%, 0);
  }
  @media (max-width: 420px) {
    transform: translate(20px, 10px);
  }
`;
export const TitH2 = styled.h2`
  line-height: 1.6;
  font-size: 14px;
`;
export const TitP = styled.p`
  font-size: 16px;
  line-height: 1.4;
  span {
    display: block;
  }
  @media (max-width: 420px) {
    font-size: 13px;
    line-height: 1.2;
  }
`;

export const Intro = styled.div<{ ScrollColor: boolean }>`
  background-color: ${({ ScrollColor }) => (ScrollColor ? "white" : "none")};
  font-family: "Pretendard";
  transition: background 0.5s ease-in-out;
`;

export const Number = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4vw 5vw 12vw 5vw;
  color: #000;
`;
export const NumBox = styled.div`
  display: flex;
  height: 280px;
  font-size: 280px;
  line-height: 1;
  margin: 0;
  overflow: hidden;
  flex-direction: row;
  @media (max-width: 1024px) {
    height: 190px;
    font-size: 200px;
  }
`;
export const NumList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(0);
`;
