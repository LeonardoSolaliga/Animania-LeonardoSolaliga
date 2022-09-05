import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="flexeo">
        <a className="letra" href=" ">
          LogoAnimania
        </a>
        <nav>
          <ul className="navlinks">
            <li>
              <a className="letra" href=" ">
                Inicio
              </a>
            </li>
            <li>
              <a className="letra" href=" ">
                Manga
              </a>
            </li>
            <li>
              <a className="letra" href=" ">
                Juegos
              </a>
            </li>
            <li>
              <a className="letra" href=" ">
                Figuras
              </a>
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
