import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <div class="flexeo">
        <a class="letra" href=" ">
          LogoAnimania
        </a>
        <nav>
          <ul class="navlinks">
            <li>
              <a class="letra" href=" ">
                Inicio
              </a>
            </li>
            <li>
              <a class="letra" href=" ">
                Manga
              </a>
            </li>
            <li>
              <a class="letra" href=" ">
                Juegos
              </a>
            </li>
            <li>
              <a class="letra" href=" ">
                Figuras
              </a>
            </li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
      <div class="encerrador">
        <h1>Animania</h1>
      </div>
    </div>
  );
};

export default NavBar;
