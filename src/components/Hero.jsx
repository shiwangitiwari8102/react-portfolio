import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import Counter from "./Counter";

const Hero = ({ data }) => {
  if (!data) return null; // Return null if `about` is undefined or null

  const { exp_year, name, title, subTitle, avatar } = data;

  const counterData = [
    { id: 1, text: "Years Of Experience", value: data.exp_year, valueType: "plus" },
    { id: 2, text: "Project Complete", value: data.some_total, valueType: "k-plus" },   
  ];

  return (
    <section id="home" className="main-hero-area pt-150 pb-80 relative z-1 ">
      <div className="container container-1620 ">
        <div className=" row items-center">
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content mb-55 animate__animated animate__fadeInUp animate__delay-0-2s">
              <span className="text-3xl">Hello, I'm</span>
              <h1 className="text-4xl font-bold">{name} {title}</h1>
              <p>{subTitle}</p>
              <div className="social-style-one mt-6">
            <a href="#" className="mr-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
              <div className="hero-btns">
                <Link to="/" className="theme-btn">
                  Hire Me <i className="far fa-angle-right ml-2" />
                </Link>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-3 lg:order-none">
            <div className="hero-counter-wrap ml-auto mb-55 animate__animated animate__fadeInUp animate__delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="author-image-part animate__animated animate__fadeIn animate__delay-0-3s">
              <div className="bg-circle" />
              <img src={avatar.url} alt="Author" />
              <div className="progress-shape">
                <img src="assets/images/hero/progress-shape.png" alt="Progress" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        {[...Array(10)].map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
