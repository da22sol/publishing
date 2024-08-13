import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as S from './skills.style';
const Skills = () => {
    const AboutScroll = useRef(null);
    const AboutUl = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth >= 1024) {
            gsap.fromTo(
                AboutScroll.current,
                { translateX: 0 },
                {
                    translateX: -1400,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: AboutUl.current,
                        start: 'top top',
                        end: 'bottom center',
                        scrub: 0.7,
                        pin: AboutScroll.current,
                    },
                }
            );
        }
    }, []);
    return (
        <div>
            <S.About ref={AboutScroll}>
                <S.AboutH2>SKILLS</S.AboutH2>
                <S.AboutBox>
                    <S.SkiList ref={AboutUl}>
                        <S.SkiItm>
                            <S.ItmBox className="ItmBox">
                                <S.ColorBoxItmTxt>
                                    <S.HBox>H</S.HBox>
                                    <p>HTML</p>
                                    <span>more</span>
                                </S.ColorBoxItmTxt>
                                <S.BackBox>
                                    <S.BackTxt>
                                        <p>웹접근성과 웹표준을 고려하며 마크업 구조를 작성합니다</p>
                                    </S.BackTxt>
                                </S.BackBox>
                            </S.ItmBox>
                        </S.SkiItm>
                        <S.SkiItm>
                            <S.ItmBox className="ItmBox">
                                <S.ColorBoxItmTxt>
                                    <S.CBox>C</S.CBox>
                                    <p>CSS</p>
                                    <span>more</span>
                                </S.ColorBoxItmTxt>
                                <S.BackBox>
                                    <S.BackTxt>
                                        <p>
                                            position 속성을 활용하여 다양한 형태의 화면을 구성할 수 있습니다.레이아웃을
                                            조정하고 요소들을 원하는 위치에 배치할 수 있습니다.
                                        </p>
                                        <p>
                                            반응형 디자인을 구현하여 다양한 디바이스에서 웹 사이트를 사용할 수 있습니다.
                                        </p>
                                    </S.BackTxt>
                                </S.BackBox>
                            </S.ItmBox>
                        </S.SkiItm>
                        <S.SkiItm>
                            <S.ItmBox className="ItmBox">
                                <S.ColorBoxItmTxt>
                                    <S.JBox>JS</S.JBox>
                                    <p>JS</p>
                                    <span>more</span>
                                </S.ColorBoxItmTxt>
                                <S.BackBox>
                                    <S.BackTxt>
                                        <p>
                                            웹 페이지를 동적으로 만들고 사용자와의 상호작용, 웹 페이지 내 요소들의 동적
                                            변경 등을 구현할 수 있습니다.
                                        </p>
                                        <p>ES6이용하여 작성 할 수 있습니다.</p>
                                    </S.BackTxt>
                                </S.BackBox>
                            </S.ItmBox>
                        </S.SkiItm>
                        <S.SkiItm>
                            <S.ItmBox className="ItmBox">
                                <S.ColorBoxItmTxt>
                                    <S.RBox>R</S.RBox>
                                    <p>React</p>
                                    <span>more</span>
                                </S.ColorBoxItmTxt>
                                <S.BackBox>
                                    <S.BackTxt>
                                        <p>재사용 가능한 컴포넌트를 사용하여 UI를 구성할수있습니다.</p>
                                        <p>
                                            useRef 훅을 사용하여 스크롤 위치를 추적하고, useEffect 훅을 사용하여 스크롤
                                            이벤트를 감지하여 스크롤에 따라 요소를 조작할 수 있습니다.
                                        </p>
                                    </S.BackTxt>
                                </S.BackBox>
                            </S.ItmBox>
                        </S.SkiItm>
                        <S.SkiItm>
                            <S.ItmBox className="ItmBox">
                                <S.ColorBoxItmTxt>
                                    <S.TBox>T</S.TBox>
                                    <p>TypeScript</p>
                                    <span>more</span>
                                </S.ColorBoxItmTxt>
                                <S.BackBox>
                                    <S.BackTxt>
                                        <p>타입스크립트를 이용해서 코드의 가독성을 높이고 간결하게 작성할수있습니다</p>
                                    </S.BackTxt>
                                </S.BackBox>
                            </S.ItmBox>
                        </S.SkiItm>
                        <S.SkiItm>
                            <S.ItmBox className="ItmBox">
                                <S.ColorBoxItmTxt>
                                    <S.PBox>✱</S.PBox>
                                    <p>PLUS</p>
                                    <span>more</span>
                                </S.ColorBoxItmTxt>
                                <S.BackBox>
                                    <S.BackTxt>
                                        <p>GSAP의 scrolltrigger 인터렉티브웹을 만들수있습니다.</p>
                                        <p>Git을 이용해서 동료와 협업이 가능합니다.</p>
                                        <p>API를 활용하여 데이터를 받아와 UI를 동적으로 구성할 수 있습니다.</p>
                                    </S.BackTxt>
                                </S.BackBox>
                            </S.ItmBox>
                        </S.SkiItm>
                    </S.SkiList>
                </S.AboutBox>
            </S.About>
        </div>
    );
};

export default Skills;
