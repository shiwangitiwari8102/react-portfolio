import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Services = ({ services }) => {
  if (!services) return <p></p>;

  return (
    <section
      id="services"
      className="services-area-two pt-20 md:pt-32 lg:pt-64 pb-20 md:pb-32 lg:pb-64 relative z-1"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-items-center">
          <div className="mb-10 md:mb-20 lg:mb-35 text-center">
            <span className="text-gray-500 mb-3 block">
              <i className="flaticon-asterisk-1" /> my services area
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">MY SERVICE AREA</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {services.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="service-item-two flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <div className="icon mb-4">
                <img src={item.image.url} alt="Icon" />
              </div>
              <h5 className="title">
                <a href="#">{item.name}</a>
              </h5>
              <div className="text">
                {item.desc}
              </div>
              <ul className="list mt-4">
                <li>Ui/Ux Design</li>
                <li>Research</li>
                <li>Web &amp; Mobile app</li>
              </ul>
              <a href="#" className="details-btn mt-4">
                <i className="fal fa-long-arrow-right" />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center pt-12 md:pt-20 lg:pt-32">
          <Link to="services" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
