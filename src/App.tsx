import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import styled, { keyframes } from "styled-components";

function App() {
  const titleRef = useRef(null);
  const starRefs = [useRef(null), useRef(null), useRef(null)];


  useEffect(() => {
    const titleTimeline = gsap.timeline();

    titleTimeline.fromTo(
      titleRef.current,
      {
        fontWeight: 800,
      },
      {
        fontWeight: 100,
        repeat: -1,
        duration: 4,
        ease: 'expo.inOut',
        yoyo: true,
      }
    );

    starRefs.forEach((starRef) => {
      gsap.fromTo(
        starRef.current,
        {
          fontWeight: 800,
          rotate: 306,
        },
        {
          fontWeight: 100,
          rotate: 180,
          repeat: -1,
          duration: 4,
          ease: 'expo.inOut',
          yoyo: true,
        }
      );
    });
  }, []);

  return (
    <>
      <TitleH1 ref={titleRef}>PORT FOLIO</TitleH1>
      <TitleP>
        <TitleH1> </TitleH1>
        "Hello! I'm KeemDaSol. I hope you enjoy browsing my portfolio. thank
        you!"
      </TitleP>
      <Line1 />
      <Line2 />
      <StarContainer>
        <Star ref={starRefs[0]}>*</Star>
        <Star ref={starRefs[1]}>*</Star>
        <Star ref={starRefs[2]}>*</Star>
      </StarContainer>
      <div className="msg">
        <p>contact me</p>
      </div>
    </>
  );
}

const TitleH1 = styled.h1`
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
`;

const TitleP = styled.p`
  font-size: 50px;
  color: #f6edd9;
  font-family: "asterisk-sans-variable", sans-serif;
  font-weight: 400;
  position: absolute;
  left: 24px;
  top: 217px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 1.3px;
`;

const Line1 = styled.div`
  border-style: solid;
  border-color: #f6edd9;
  border-width: 1px 0 0 0;
  width: 95%;
  height: 0px;
  position: absolute;
  left: 24px;
  top: 211px;
`;

const Line2 = styled.div`
  border-style: solid;
  border-color: #f6edd9;
  border-width: 1px 0 0 0;
  width: 95%;
  height: 0px;
  position: absolute;
  left: 24px;
  top: 280px;
`;
const starAnimation = keyframes`
  0% {
    transform: rotate(306);
    font-weight: 800;
  }
  50% {
    transform: rotate(180);
    font-weight: 100;
  }
  100% {
    transform: rotate(30);
    font-weight: 800;
  }
`;

const Star = styled.span`
  text-align: center;
  font-family: "asterisk-sans-variable", sans-serif;
  font-size: 600px;

  position: relative;
  left: 28%;
  margin-top: 120px;
  display: inline-block;
  height: 364px;

  color: #e2b2d9;
`;
const StarContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export default App;
