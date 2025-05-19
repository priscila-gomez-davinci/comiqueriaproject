import React from 'react';
import './Header.css'; 


function Header() {
  return (
    <header className="header">
      <div className="logo"><img src= "..\Assets\ComiqueriaFontTest.png" /></div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;