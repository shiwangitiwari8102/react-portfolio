// ScrollTop.jsx

import { useEffect } from "react";
import { noxfolioUtilits } from "@/utility";

const ScrollTop = () => {
  useEffect(() => {
    noxfolioUtilits.scrollTop();
  }, []);

  return (
    <a href="#" className="fixed bottom-5 right-5 z-50 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300">
      <span className="text-lg">
        <i className="fas fa-angle-double-up" />
      </span>
    </a>
  );
};

export default ScrollTop;
