import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homeRelative">
        <h1 className="homeH1">Articulos de pesca: El Besugo</h1>
        <img
          className="homeImg"
          src="./img/pescado.png"
          width={800}
          height={700}
          alt=""
        />
      </div>
      <h3 className="homeH3"> Los mejores productos a los mejores precios</h3>
      <Link to="/products">
        <button className="buttonHome"> Ir a la tienda</button>
      </Link>
    </div>
  );
};

export default Home;
