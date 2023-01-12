import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/picture.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mrinal Mallik</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>
      </div>
      <a href="#contract" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
