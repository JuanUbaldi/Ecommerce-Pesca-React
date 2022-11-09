import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="DivTitulo">
      <h1 className="Titulo">Articulos de pesca</h1>
      <ul className="Lista">
        <li className="ElementoMenu">
          <Link to="/">mi tienda</Link>
        </li>
        <li className="ElementoMenu">
          <Link to="/category/Anzuelos">anzuelos</Link>
        </li>
        <li className="ElementoMenu">
        <Link to="/category/plomadas">plomadas</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default Navbar;
