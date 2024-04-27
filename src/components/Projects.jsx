import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Projects = ({ projects }) => {
  if (!projects) return <p></p>;

  return (
    <section
      id="projects"
      className="projects-area-four pt-32 md:pt-40 lg:pt-52 pb-32 md:pb-40 lg:pb-52 relative z-10"
    >

<div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>
        </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 9).map((item) => (
            <div key={item.id} className="col-span-1">
              <div className="project-item style-four wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src={item.image.url} alt="Project" />
                  <Link to="/" className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </Link>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link to="/project-details">{item.title}</Link>
                  </h5>
                  <span className="sub-title">Art, Direction</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-10 md:mt-20 lg:mt-28">
          <div className="project-details-btn mb-10 md:mb-20">
            <Link to="/" className="more-btn wow zoomIn delay-0-2s">
              <span>More</span>
              <i className="fal fa-arrow-up" />
            </Link>
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

export default Projects;
