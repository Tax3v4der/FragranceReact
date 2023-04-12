import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="" alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <img className="logo" src="img/logo.png" alt="" />
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
          <img className="panier" src="img/panier.png" alt="panier" />
        </li>
        <li className="nav-item">
          <img className="favori" src="img/favori.png" alt="favori" />
        </li>
        <li className="nav-item">
          <img className="compte" src="img/compte.png" alt="compte" />
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
