import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "./../assets/logo.png";

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className="header">
      <div className="header-container">
        <div>
          <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
        </div>
        <Link to="/">
          <div className="links">
            <button href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</button>
          </div>
        </Link>
        <Link to="/pokemons">
          <div className="links">
            <button href="#pokemons" onClick={() => setActiveNav('#pokemons')} className={activeNav === '#pokemons' ? 'active' : ''}>Pokemons</button>
          </div>
        </Link>
        <Link to="/contact">
          <div className="links">
            <button href="#contato" onClick={() => setActiveNav('#contato')} className={activeNav === '#contato' ? 'active' : ''}>Contato</button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
