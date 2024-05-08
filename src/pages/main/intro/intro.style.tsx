
import styled from "styled-components";

export const Section2 = styled.div`
  position: relative;
  padding: 30vw 0 5vw 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 30vh;

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
`;
export const Section2Txt = styled.div`
  display: flex;
  width: 600px;
  height: 330px;
  background-color: #f8e276;
  transform: translate(0, 50%);
  color: #464646;
  margin: 0 auto;
`;

export const TxtBox = styled.div`
  padding: 8vw 0 15vw;
  color: #464646;
  opacity: 0.4;
  transform: translate(40%, 10px);
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
`;

export const Intro = styled.div<{ ScrollColor: boolean }>`
  background-color: ${({ ScrollColor }) => (ScrollColor ? "white" : "none")};
  font-family: "Pretendard";
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
`;
export const NumList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(0);
`;
