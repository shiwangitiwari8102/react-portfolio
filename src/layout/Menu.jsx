
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Menu = () => {
  return (
    <ul className="navigation  onepage  clearfix" style={{visibility:"visible" }}>
      <li>
        <ScrollLink to="home" smooth={true} duration={200}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={200}>
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="resume" smooth={true} duration={200}>
          Resume
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="services" smooth={true} duration={200}>
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} duration={200}>
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="projects" smooth={true} duration={200}>
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="testimonial" smooth={true} duration={200}>
          Testimonial
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={200}>
          Contact
        </ScrollLink>
      </li>
    </ul>
  );
};

export default Menu;
