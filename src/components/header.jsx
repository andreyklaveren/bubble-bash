import React from "react"
import arrowRight from "../assets/images/arrowRight.svg";
import meeting from "../assets/images/meeting.svg"
export default function Header() {
    return (
      <div>
        <header className="header">
        <div className="container">
          <section className="headerContent">
            <h1 className="headerTitle">Create Amazing Digital Product For Your Business</h1>
            <p className="headerDescription">
              We are a professional digital agency that has been established since 2016. We present a variety of digital services that can help you solve problems in your business.
            </p>
            {/* ########Fazer o button virar um componente######## */}
            <a href="#" className="defaultButton">
              <h4 className="defaultButtonText">Get Started</h4>
              <img
                src={arrowRight}
                alt="Right arrow"
                title="Get started with our digital services"
              />
            </a>
            {/* ########Fazer o button virar um componente######## */}
          </section>
        </div> 
      </header>
      <div>
        <img className="meetingImg" src={meeting} alt="" srcset="" />
      </div>
    </div>
    );
  };