import React from 'react';
import './Styles/Header.css';

function header() {
  return (
<div className="header">
      <a href="/" className="logo">
      <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"/>
      </a>
      <nav className="nav-links">
        <a href="/" className="nav-link">Descargar</a>
        <a href="/" className="nav-link">Nitro</a>
        <a href="/" className="nav-link">Descubrir</a>
        <a href="/" className="nav-link">Seguridad</a>
        <a href="/" className="nav-link">Soporte técnico</a>
        <a href="/" className="nav-link">Blog</a>
        <a href="/" className="nav-link">Empleos</a>
        <a href="/" className="btn-primary">Abrir Discord</a>
      </nav>
    </div>
  );
}

export default header;
