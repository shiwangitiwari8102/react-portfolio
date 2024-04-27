import React, { useEffect } from 'react';
import { noxfolioUtilits } from '../utility';

const Preloader = () => {
  useEffect(() => {
    noxfolioUtilits.preloader();
  }, []);

  return <div className="preloader" />;
};

export default Preloader;
