import React from "react";
import TitleTxt from "./title/title";
import IntroPage from "./intro/intro";
import Toy from "./section/toy/toy";
import Publishing from "./section/pub/publishing";
import Skills from "./skills/skills";
const MainPage = () => {
  return (
    <>
      <TitleTxt />
      <IntroPage />
      <Toy />
      <Publishing />
      <Skills/>
    </>
  );
};

export default MainPage;
