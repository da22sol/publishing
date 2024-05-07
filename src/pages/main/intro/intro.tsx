import React, { useState, useRef, useEffect } from "react";
import * as S from "../intro/intro.style";
import me from "../../../assets/image/me.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const IntroPage = () => {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(TxtBoxRef.current, {
      opacity: 1,
      y: 20,
      duration: 1.5,
      scrollTrigger: {
        trigger: TxtBoxRef.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.set(NumBoxRef, { y: 0 });
    gsap.to(NumBoxRef.current, {
      y: -280,
      duration: 1.5,
      scrollTrigger: {
        trigger: NumBoxRef.current,
        start: "top 20%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div>
      <S.Intro ScrollColor={ScrollColor}>
        <S.Section2>
          <img src={me} alt="img" />
          <S.Section2Txt>
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
          </S.Section2Txt>
        </S.Section2>
        <S.Number>
          <S.NumBox>
            <span>0</span>
            <S.NumList ref={NumBoxRef}>
              <li>0</li>
              <li>1</li>
              <li>3</li>
            </S.NumList>
          </S.NumBox>
        </S.Number>
        <S.TxtBox ref={TxtBoxRef}>
          <S.TitH2>안녕하세요</S.TitH2>

          <S.TitP>
            웹사이트를 구현할 때 사용자의 경험을 중시하고,{" "}
            <span>
              사용자 중심의 디자인과 기능을 고려하여 웹사이트를 제작하겠습니다.
            </span>
            사용자의 편의성과 만족도를 높일 수 있게 노력하고 학습하겠습니다.
          </S.TitP>
        </S.TxtBox>
      </S.Intro>
    </div>
  );
};

export default IntroPage;
