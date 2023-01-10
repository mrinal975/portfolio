import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="" target="_blank">
        <BsLinkedin />
      </a>
      <a href="" target="_blank">
        <FaGithub />
      </a>
      <a href="" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
