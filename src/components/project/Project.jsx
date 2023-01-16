import React from "react";
import "./project.css";
import { BiCheck } from "react-icons/bi";

function Project() {
  return (
    <section id="services">
      <h5>Completed Project</h5>
      <h2>Project List</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>HRIS for Robi</h3>
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
          </ul>
        </article>
        {/* End of WebDevelopment */}

        <article className="service">
          <div className="service__head">
            <h3>Robi Career</h3>
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
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Water Billing</h3>
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
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Brac Bank SME</h3>
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
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Project;
