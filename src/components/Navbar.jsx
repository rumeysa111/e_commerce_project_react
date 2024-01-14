// Navbar.jsx

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Navbar({ user, handleLogOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Bedavaci kerim</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
            <NavLink className="nav-link" to="/products">Ürünler</NavLink>
            <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
            <NavLink className="nav-link" to="/contact">İletişim</NavLink>
            
            {user ? (
              <>
                          <NavLink className="nav-link" to="/fav">Favoriler</NavLink>
                          <NavLink className="nav-link float-end "to="/sepet">Sepet</NavLink>
                <button className='nav-link' onClick={handleLogOut}>Log out ({user.name})</button>
              </>
            ) : (
              <NavLink className="nav-link" to="/Login">Login</NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
