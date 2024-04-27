
import React, { useEffect } from 'react';
import WOW from 'wowjs';

export const noxfolioUtilits = {
  animation: () => {
    if (typeof window !== "undefined") {
      new WOW.WOW().init();
    }
  },
  stickyNav: () => {
    const handleScroll = () => {
      let offset = window.scrollY;
      const sticky = document.querySelectorAll(".main-header");
      for (let i = 0; i < sticky.length; i++) {
        const stick = sticky[i];
        if (stick) {
          if (offset >= 0) { // Change condition to always add the fixed-header class
            stick.classList.add("fixed-header");
          } else {
            stick.classList.remove("fixed-header");
          }
        }
      }
    };

    // Call handleScroll once when the component mounts to ensure header visibility
    handleScroll();

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },
  preloader: () => {
    setTimeout(() => {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.style.transition = "opacity 0.5s";
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }, 200);
  },
  scrollTop: () => {
    window.addEventListener("scroll", () => {
      let scrollUp = document.querySelector(".scroll-top");
      let st = window.scrollY;
      if (scrollUp) {
        if (st > 110) {
          scrollUp.style.display = "flex";
        } else {
          scrollUp.style.display = "none";
        }
      }
    });
  },
};

const UtilityComponent = () => {
  // Initialize WOW.js when the component mounts
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();

    return () => {
      wow.sync(); // Remove WOW animations when component unmounts
    };
  }, []);

  // Call stickyNav when the component mounts to ensure header visibility
  useEffect(() => {
    noxfolioUtilits.stickyNav();
  }, []);

  // You can use noxfolioUtilits here or call its methods as needed
  return <div>Utility Component</div>;
};

export default UtilityComponent;
