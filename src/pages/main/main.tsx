import React, { useState, useRef, useEffect } from "react";
import TitleTxt from "./title";
import styled from "styled-components";
import me from "../../assets/image/me.jpeg";
import Toy from "../../pages/toy";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const MainPage = () => {
  const [ScrollColor, setScroll] = useState(false);
  const TxtBoxRef = useRef(null);
  const NumBoxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const ScrollY = window.scrollY;
      const ScrollHeight = 682;
      if (ScrollY > ScrollHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(TxtBoxRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: TxtBoxRef.current,
        start: "top 10%",
        toggleActions: "play none none reverse", // 애니메이션 토글 설정
      },
    });
    gsap.set(NumBoxRef, { y: 0 });
    gsap.to(NumBoxRef.current, {
      y: -280,
      duration: 1.5,
      scrollTrigger: {
        trigger: NumBoxRef.current,
        start: "top 10%",
        end: "bottom top",
        toggleActions: "play none none reverse", // 애니메이션 토글 설정
      },
    });
  }, []);

  return (
    <>
      <TitleTxt />
      <Intro ScrollColor={ScrollColor}>
        <Section2>
          <img src={me} alt="img" />
          <div className="Section2Txt">
            <ul>
              <li>이름:</li>
              <li>나이:</li>
              <li>거주지:</li>
              <li>이메일:</li>
            </ul>
            <ol>
              <li>김다솔</li>
              <li>95.01.22</li>
              <li>대전광역시</li>
              <li>gyeoul@gmail.com</li>
            </ol>
          </div>
        </Section2>
        <div className="Number">
          <div className="NumBox">
            <span className="NumZero">0</span>
            <ul className="NumList" ref={NumBoxRef}>
              <li>0</li>
              <li>1</li>
              <li>3</li>
            </ul>
          </div>
        </div>
        <TxtBox ref={TxtBoxRef}>
          <h2 className="BoxTit">안녕하세요</h2>

          <p className="BoxTxt">
            웹사이트를 구현할 때 사용자의 경험을 중시하고,{" "}
            <span>
              사용자 중심의 디자인과 기능을 고려하여 웹사이트를 제작하겠습니다.
            </span>
            사용자의 편의성과 만족도를 높일 수 있게 노력하고 학습하겠습니다.
          </p>
        </TxtBox>
      </Intro>
      <Toy />
    </>
  );
};

const Section2 = styled.div`
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
const TxtBox = styled.div`
  padding: 15vw 0 37vw;
  color: #464646;
  opacity: 0.4;
  transform: translate(40%, 10px);
`;

const Intro = styled.div<{ ScrollColor: boolean }>`
  background-color: ${({ ScrollColor }) => (ScrollColor ? "white" : "none")};
`;
export default MainPage;
