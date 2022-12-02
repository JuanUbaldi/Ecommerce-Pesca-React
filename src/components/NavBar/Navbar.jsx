import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="DivTitulo">
      <div className="DivTitulo2">
        <img src="/Img/gabiota.png" alt="" />
        <h1 className="Titulo">Artículos de pesca</h1>

        <CartWidget />
      </div>
      <ul className="Lista">
        <li className="ElementoMenu">
          <Link to="/">mi tienda</Link>
        </li>
        <li className="ElementoMenu">
          <Link to="/category/Anzuelos">anzuelos</Link>
        </li>
        <li className="ElementoMenu">
          <Link to="/category/carnada">carnadas</Link>
        </li>
        <li className="ElementoMenu">
          <Link to="/category/plomadas">plomadas</Link>
        </li>
        <li className="ElementoMenu">
          <Link to="/category/rotores">rotores</Link>
        </li>
        <li className="ElementoMenu">
          <Link to="/category/mosquetones">mosquetones</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
