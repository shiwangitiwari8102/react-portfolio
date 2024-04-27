import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Resume = ({ timeline }) => {
  if (!timeline) return <p></p>;

  return (
    <section
      id="resume"
      className="resume-area-two bg-black relative z-10 pt-20 md:pt-32 lg:pt-72 pb-20 md:pb-32 lg:pb-64"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pb-20">
          <div className="md:col-span-1">
            <div className="mb-10 md:mb-20 text-center">
              <span className="text-gray-500 mb-3 block">
                <i className="flaticon-asterisk-1" /> MY Experience Resume
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Work & Education</h2>
            </div>
          </div>
          <div className="md:col-span-1 md:text-right">
            <Link to="/contact" className="theme-btn mb-10 md:mb-20">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <div className="timeline-heading mb-6 text-center md:text-left">
              <span className="title">Work</span>
              <div className="arrow">
                <i className="far fa-arrow-down" />
              </div>
            </div>
            <div className="timeline-box">
              {timeline
                .filter((item) => !item.forEducation)
                .slice(0, 4)
                .map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> {item.startDate} - {item.endDate}
                      </span>
                      <h5 className="title">{item.jobTitle}</h5>
                      <p>{item.company_name}</p>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="timeline-heading mb-6 text-center md:text-left">
              <span className="title">Study</span>
              <div className="arrow">
                <i className="far fa-arrow-down" />
              </div>
            </div>
            <div className="timeline-box">
              {timeline
                .filter((item) => item.forEducation)
                .slice(0, 4)
                .map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> {item.startDate} - {item.endDate}
                      </span>
                      <h5 className="title">{item.jobTitle}</h5>
                      <p>{item.company_name}</p>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                ))}
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

export default Resume;
