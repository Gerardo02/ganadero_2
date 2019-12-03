import React from "react";
import "../Fondo.css";

import Background from "../images/Fondo.png";

const Fondo = () => {
  return (
    <React.Fragment>
      <img className="elf" src={Background} alt="" />
    </React.Fragment>
  );
};

export default Fondo;
