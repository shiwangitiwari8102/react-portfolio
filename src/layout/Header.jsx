import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { noxfolioUtilits } from "../utility";
import SideBar from "./SideBar";

const Header = ({ data, Menu }) => {
  useEffect(() => {
    noxfolioUtilits.stickyNav();
  }, []);

  const toggleSidebar = () => {
    document.querySelector("body").classList.add("side-content-visible");
  };

  const [toggle, setToggle] = useState(false);

  return (
    <header className="main-menu fixed top-0 w-full z-50">
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container container-1620 mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="logo-outer flex flex-row">
            <div className="logo">
              <Link href="/" className="text-3xl">
                <a>
                  {data.name}
                </a>
              </Link>
            </div>
            
          </div>
          {/* Menu Section */}
          <div className="nav-outer flex mx-auto">
            {/* Toggle Button */}
            <button
              type="button"
              className="navbar-toggle me-4 lg:hidden"
              onClick={() => setToggle(!toggle)}
            >
              <span className="icon-bar block w-6 h-0.5 bg-black mb-1 rounded-full"></span>
              <span className="icon-bar block w-6 h-0.5 bg-black mb-1 rounded-full"></span>
              <span className="icon-bar block w-6 h-0.5 bg-black mb-1 rounded-full"></span>
            </button>
            {/* Main Menu */}
            <div
              className={`navbar-collapse   collapse ${toggle ? "block" : "hidden"}`}
            >
              {Menu ? <Menu /> : <SideBar />}
            </div>
          </div>
          {/* Menu Button */}
          <div className="menu-btns hidden lg:block">
            {/* Menu Sidebar */}
            <div className="menu-sidebar">
              <button onClick={() => toggleSidebar()}>
                <img
                  src="src/public/assets/images/shape/sidebar-tottler.svg"
                  alt="Toggler"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Upper */}
    </header>
  );
};
export default Header;

