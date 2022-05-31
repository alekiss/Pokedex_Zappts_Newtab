import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <div>
          <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
        </div>
        <Link to="/">
          <div className="links">
            <button>Home</button>
          </div>
        </Link>
        <Link to="/pokemons">
          <div className="links">
            <button>Pokemons</button>
          </div>
        </Link>
        <Link to="/contact">
          <div className="links">
            <button>Contato</button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
