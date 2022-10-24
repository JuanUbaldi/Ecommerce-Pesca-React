import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function Navbar() {
  return (
    <div className="DivTitulo">
      <h1 className="Titulo">Articulos de pesca</h1>
      <ul className="Lista">
        <li className="ElementoMenu"> <a href="flote.html">pesca de flote</a> </li>
        <li className="ElementoMenu"><a href="fondo.html"> pesca de fondo</a></li>
        <li className="ElementoMenu"><a href="lineas.html">Lineas hechas</a></li>
        <li className="ElementoMenu"><a href="carnadas.html">carnadas</a></li>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default Navbar;
