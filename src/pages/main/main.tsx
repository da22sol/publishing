import React from "react";
import TitleTxt from "./title/title";
import IntroPage from "./intro/intro";
import Toy from "./section/toy/toy";
import Publishing from "./section/pub/publishing";

const MainPage = () => {
  return (
    <>
      <TitleTxt />
      <IntroPage />
      <Toy />
      <Publishing />
    </>
  );
};

export default MainPage;
