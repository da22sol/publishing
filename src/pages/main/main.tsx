import React from "react";
import TitleTxt from "./title/title";
import IntroPage from "./intro/intro";
import Toy from "./section/toy/toy";
import Publishing from "./section/pub/publishing";
import Skills from "./section/skills/skills";
import Email from "./section/email/email";
import Footer from "../../components/footer";
const MainPage = () => {
  return (
    <>
      <TitleTxt />
      <IntroPage />
      <Toy />
      <Publishing />
      <Skills />
      <Email />
      <Footer />
    </>
  );
};

export default MainPage;
