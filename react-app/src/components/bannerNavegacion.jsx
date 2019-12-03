import React from "react";

//import Style from "../barraNavegacion.css";

import captura from "../images/captura Logo.png";

import historial from "../images/historial logo.png";

const barra = () => {
  return (
    (
      <div className="captura">
        <img src={captura} alt="" />
      </div>
    ),
    (
      <div className="historial">
        <img src={historial} alt="" />
      </div>
    ),
    (
      <div className="captura">
        <img src={captura} alt="" />
      </div>
    )
  );
};

export default barra;
