import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import * as S from './title.style';

function TitleTxt() {
  const titleRef = useRef(null);
  const starRefs = [useRef(null), useRef(null), useRef(null)];
  const msgTo = useRef(null);

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
        duration: 1.5,
        ease: "expo.inOut",
        yoyo: true,
      }
    );

    starRefs.forEach((starRef) => {
      gsap.fromTo(
        starRef.current,
        {
          fontWeight: 800,
          rotate: 90,
        },
        {
          fontWeight: 100,
          rotate: 120,
          repeat: -1,
          duration: 1.5,
          ease: "expo.inOut",
          yoyo: true,
        }
      );
    });
    gsap.fromTo(
      msgTo.current,
      { y: -80 },
      {
        y: 10,
        duration: 1.5,
        ease: "expo.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  return (
    <S.Title>
      <S.TitleH1 ref={titleRef}>PORT FOLIO</S.TitleH1>
      <S.TitleP>
        <S.TitleH1> </S.TitleH1>
        "Hello! I'm KeemDaSol. I hope you enjoy browsing my portfolio. thank
        you!"
      </S.TitleP>
      <S.Line1 />
      <S.Line2 />
      <S.StarContainer>
        <S.Star ref={starRefs[0]}>*</S.Star>
        <S.Star ref={starRefs[1]}>*</S.Star>
        <S.Star ref={starRefs[2]}>*</S.Star>
      </S.StarContainer>
      <S.Msg ref={msgTo}>
        <p>contact me</p>
      </S.Msg>



    </S.Title>
  );
}

export default TitleTxt;
