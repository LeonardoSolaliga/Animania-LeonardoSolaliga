import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="flexeo">
        <Link to="/" className="letra">
          <img className="navbarimg" src="img/logo2.png" alt="logo" />
        </Link>
        <nav>
          <ul className="navlinks">
            <li>
              <Link to="/" className="letra">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/category/men's clothing" className="letra" >
                Men's clothing
              </Link>
            </li>
            <li>
              <Link to="/category/women's clothing" className="letra">
                Women's clothing
              </Link>
            </li>
            <li>
              <Link to="/category/electronics" className="letra">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/category/jewelery" className="letra">
                jewelery
              </Link>
            </li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
      <div className="encerrador">
        <h1>Animania</h1>
      </div>
    </div>
  );
};

export default NavBar;
