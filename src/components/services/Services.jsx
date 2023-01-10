import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Deb Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
          </ul>
        </article>
        {/* End of WebDevelopment */}

        <article className="service">
          <div className="service__head">
            <h3>Operational</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing and used to demonstrate the visual form</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
