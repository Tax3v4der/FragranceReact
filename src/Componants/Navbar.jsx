import React from 'react';
import '../App.css';
import logo from '../assets/img/logo.png';
import panier from '../assets/img/panier.png';
import favori from '../assets/img/favori.png';
import compte from '../assets/img/compte.png';
function Navbar() {
  return (
    <nav className="navbar">
      <img src="" alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <img className="logo" src={logo} alt="Logo" />
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Home </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Best Seller</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Inspirations</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Our Story</a>
        </li>
        <li className="nav-item">
          <img className="panier" src={panier} alt="panier" />
        </li>
        <li className="nav-item">
          <img className="favori" src={favori} alt="favori" />
        </li>
        <li className="nav-item">
          <img className="compte" src={compte} alt="compte" />
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>     
    </nav>
  );
}

export default Navbar;
