import React, { ReactNode } from "react";
import * as S from "../skills/skills.style";
const Skills = () => {
  return (
    <div>
      <S.About>
        <S.AboutH2>SKILLS</S.AboutH2>
        <S.AboutBox>
          <S.SkiList>
            <S.SkiItm>
              <S.ItmBox>
                <S.ColorBoxItmTxt className="ColorBox ItmTxt">
                  <S.HBox>H</S.HBox>
                  <p>HTML</p>
                  <span>more</span>
                </S.ColorBoxItmTxt>
                <div className="grayBox">
                  <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다.</p>
                </div>
              </S.ItmBox>
            </S.SkiItm>
            <S.SkiItm>
           <S.ItmBox>
                <S.ColorBoxItmTxt className="ColorBox ItmTxt">
                  <h3 className="CBox">C</h3>
                  <p>CSS</p>
                  <span>more</span>
                </S.ColorBoxItmTxt>
                <div className="grayBox">
                  <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다.</p>
                </div>
           </S.ItmBox>
            </S.SkiItm>
            <S.SkiItm>
         <S.ItmBox>
                <S.ColorBoxItmTxt className="ColorBox ItmTxt">
                  <h3 className="JBox">JS</h3>
                  <p>JS</p>
                  <span>more</span>
                </S.ColorBoxItmTxt>
                <div className="grayBox">
                  <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다.</p>
                </div>
         </S.ItmBox>
            </S.SkiItm>
            <S.SkiItm>
            <S.ItmBox>
                <S.ColorBoxItmTxt className="ColorBox ItmTxt">
                  x<h3 className="RBox">R</h3>
                  <p>React</p>
                  <span>more</span>
                </S.ColorBoxItmTxt>
                <div className="grayBox">
                  <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다.</p>
                </div>
            </S.ItmBox>
            </S.SkiItm>
            <S.SkiItm>
                <S.ColorBoxItmTxt className="ColorBox ItmTxt">
                  <h3 className="TBox">T</h3>
                <p>TypeScript</p>
                <span>more</span>
              </S.ColorBoxItmTxt>
              <div className="grayBox">
                <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다.</p>
              </div>
            </S.SkiItm>
            <S.SkiItm>
              <S.ColorBoxItmTxt className="ColorBox ItmTxt">
                <h3 className="HBox">H</h3>
                <p>PLUS</p>
                <span>more</span>
              </S.ColorBoxItmTxt>
              <div className="grayBox">
                <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다.</p>
              </div>
            </S.SkiItm>
          </S.SkiList>
        </S.AboutBox>
      </S.About>
    </div>
  );
};

export default Skills;
