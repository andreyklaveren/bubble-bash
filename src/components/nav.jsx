import React from "react";
import logo from "../assets/images/logo.svg";

export default function Nav() {
  return  (
    <nav className="navigation">
    <div className="container">
      <div className="navigationContent">
        <a className="logoAndText" href="#">
          <img src={logo} alt="Bubble Bash Logo" />
          <h2>Bubble Bash</h2>
        </a>
        <ul className="navigationLinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#ourServices">Our Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testmonial">Testimonial</a>  {/* Correct spelling to "Testimonial" */}
          </li>
          <li>
            <a href="#contactUs">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
