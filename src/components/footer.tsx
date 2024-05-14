import React from "react";
import Git from "./../assets/image/gitIcon.png";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <FooterBox>
        <p>©2024 All rights reserved.</p>
        <GitImg>
          <a href="https://github.com/da22sol">
            {" "}
            <img src={Git} alt="깃로고" />
          </a>
        </GitImg>
      </FooterBox>
    </>
  );
};

const FooterBox = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: space-between;

  padding: 0 20px;
  p{
    width: 100%;
  }
`;

const GitImg = styled.div`

 

  img {
    width: 30px;
    opacity: 0.7;
  }
`;
export default Footer;
