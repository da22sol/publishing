import React, { useRef, useEffect } from 'react';
import Port from '../../../..//assets/image/por.png';
import Daejeon from '../../../../assets/image/dae.png';
import Company from '../../../../assets/image/com.png';
import Amuse from '../../../../assets/image/amuse.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as S from './publishing.style';

const Publishing = () => {
    const Slide1 = useRef(null);
    const Slide2 = useRef(null);
    const Slide3 = useRef(null);
    const Slide4 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const slides = [Slide1.current, Slide2.current, Slide3.current, Slide4.current];

        slides.forEach((slide, index) => {
            gsap.from(slide, {
                y: 100,
                scrollTrigger: {
                    trigger: slide,
                    start: 'top top',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse',
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                },
            });
        });
    }, []);

    return (
        <S.Pub>
            <S.PubH2>Publishing</S.PubH2>
            <S.PubBox>
                <S.port ref={Slide1}>
                    <S.PubImg>
                        <img src={Port} alt="포트폴리오 이미지" />
                    </S.PubImg>
                    <S.PubTxt>
                        <S.PubH4>1/4</S.PubH4>
                        <S.PubTH2>개인 포트폴리오</S.PubTH2>
                        <p>리액트-타입스크립트 기반으로 만든 개인포트폴리오 사이트</p>
                        <S.SiteBtn>
                            <a href="https://github.com/da22sol/publishing">git에서보기</a>
                            <a href="https://frosted-brook-b69.notion.site/a750decbce704ec2821c5030ad4f6892">
                                코드리뷰
                            </a>
                        </S.SiteBtn>
                    </S.PubTxt>
                </S.port>
            </S.PubBox>

            <S.PubBox>
                <S.deajeon ref={Slide2}>
                    <S.PubImg>
                        <img src={Daejeon} alt="포트폴리오 이미지" />
                    </S.PubImg>
                    <S.PubTxtB>
                        <S.PubH4>2/4</S.PubH4>
                        <S.PubTH2>대전광역시 사회서비스원</S.PubTH2>
                        <p>공식사이트와 타지역사이트 디자인을 참고하며 만들었습니다.</p>
                        <p> 웹 접근성을 준수하여만들었고 반응형 웹사이트입니다</p>
                        <S.SiteBtn2>
                            <a href="https://da22sol.github.io/redaejeon/">site</a>
                            <a href="https://github.com/da22sol/redaejeon">git에서보기</a>
                            <a href="https://frosted-brook-b69.notion.site/f07895ae2d24419381a8db180250414f">
                                코드리뷰
                            </a>
                        </S.SiteBtn2>
                    </S.PubTxtB>
                </S.deajeon>
            </S.PubBox>
            <S.PubBox>
                <S.amuse ref={Slide4}>
                    <S.PubImg>
                        <img src={Amuse} alt="포트폴리오 이미지" />
                    </S.PubImg>
                    <S.PubTxtB>
                        <S.PubH4>3/4</S.PubH4>
                        <S.PubTH2>AMUSE</S.PubTH2>
                        <p>가상의 회사 사이트를 gdweb를 참고하여 만들었습니다.</p>
                        <p> swiper를 이용한 반응형 웹사이트입니다</p>
                        <S.SiteBtn4>
                            <a href="https://da22sol.github.io/amuse">site</a>
                            <a href="https://github.com/da22sol/amuse">git에서보기</a>
                            <a href="https://frosted-brook-b69.notion.site/72dd5648876e402b8e895573b571fd2a">
                                코드리뷰
                            </a>
                        </S.SiteBtn4>
                    </S.PubTxtB>
                </S.amuse>
            </S.PubBox>
            <S.PubBox>
                <S.company ref={Slide3}>
                    <S.PubImg>
                        {' '}
                        <img src={Company} alt="포트폴리오 이미지" />
                    </S.PubImg>
                    <S.PubTxt>
                        <S.PubH4>4/4</S.PubH4>
                        <S.PubTH2>컴퍼니 회사 사이트</S.PubTH2>
                        <p>가상의 회사 사이트를 gdweb를 참고하여 만들었습니다.</p>
                        <p> fullPage.js 이루어진 반응형 웹사이트입니다</p>
                        <S.SiteBtn3>
                            <a href="https://da22sol.github.io/company">site</a>
                            <a href="https://github.com/da22sol/company">git에서보기</a>
                            <a href="https://frosted-brook-b69.notion.site/3b51d434d5b94d3c998bfd86c79490c2?pvs=74">
                                코드리뷰
                            </a>
                        </S.SiteBtn3>
                    </S.PubTxt>
                </S.company>
            </S.PubBox>
        </S.Pub>
    );
};

export default Publishing;
