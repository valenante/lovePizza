import React from "react";
import logo from "../../assets/images/logo.png"; // Logo de la aplicación
import "../../styles/TopBar.css"; // Estilos de TopBar

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-center align-items-center">
        <img src={logo} alt="Logo LP" className="top-bar-logo" />
      </div>
    </div>
  );
};

export default TopBar;
