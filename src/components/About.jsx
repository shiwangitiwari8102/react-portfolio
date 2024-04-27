import React from "react";
import Counter from "./Counter";

const About = ({ about }) => {
  if (!about) return <p></p>;

  return (
    <section
      id="about"
      className="about-area-two relative z-1 pt-20 md:pt-32 lg:pt-64 pb-20 md:pb-32 lg:pb-64"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40 items-center">
          <div className="relative z-2">
            <div className="mb-10 md:mb-20 lg:mb-35">
              <span className="text-gray-500 mb-3 block">
                <i className="flaticon-asterisk-1" />
                Introduction of Myself
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {about.subTitle}
              </h2>
            </div>
            <div className="text-gray-700">
              <p className="mb-5">{about.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="about-info-item">
                  <small className="text-gray-500">born In</small>
                  <b>New York</b>
                </div>
                <div className="about-info-item">
                  <small className="text-gray-500">experience</small>
                  <b>20+ Years</b>
                </div>
                <div className="about-info-item">
                  <small className="text-gray-500">date of birth</small>
                  <b>27 June 1983</b>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="about-counter-wrap mx-auto md:mx-0">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-5 md:gap-10 lg:gap-20 justify-center md:justify-start">
                <div className="mb-5 md:mb-10">
                  <div className="counter-item counter-text-wrap">
                    <Counter end={8} extraClass="k" />
                    <span className="counter-title block">project completed</span>
                  </div>
                </div>
                <div className="mb-5 md:mb-10">
                  <div className="counter-item counter-text-wrap">
                    <Counter end={8} extraClass="k" />
                    <span className="counter-title block">Award achievements</span>
                  </div>
                </div>
                <div className="mb-5 md:mb-10">
                  <div className="counter-item counter-text-wrap">
                    <Counter end={80} extraClass="k" />
                    <span className="counter-title block">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo mx-auto md:mx-0">
                <img
                  className="w-32 md:w-40 lg:w-48 mx-auto md:mx-0"
                  src="src/public/assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
