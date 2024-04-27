import React, { useEffect } from "react";
import { noxfolioUtilits } from "../utility";
import Header from "./Header"; 
import SideBar from "./SideBar"; 
import Menu from "./Menu";

const NoxfolioLayout = ({data}) => {
  useEffect(() => {
    noxfolioUtilits.animation(); 
  }, []);

  return (
    <div className="page-wrapper">
      <Header data={data} Menu={Menu} />
      <SideBar />
      
    </div>
  );
};

export default NoxfolioLayout;
