import React from "react";
import Home from "../Home";
import Scroll from "../Scroll";
import SecondPage from "../SecondPage";
import Footer from "../Footer";
import AfterLogin from "./AfterLogin";

const AfterLoginCombined = () => {
  return (
    <div>
      <AfterLogin />
      <Scroll />
      <SecondPage />
      <Footer />
    </div>
  );
};

export default AfterLoginCombined;
