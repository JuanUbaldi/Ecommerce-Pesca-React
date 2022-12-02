import React from "react";
import Button from "../Button/Button";
import "./item.css";
import { Link } from "react-router-dom";
function Item(props) {
  let urlId = `/detalle/${props.Key}`;
  return (
    <div className="cards">
      <div className="card-img">
        <img src={props.imgUrl} alt="Product-Img" />
      </div>
      <div className="card-details">
        <h2>{props.title}</h2>
        <h2>{props.detail}</h2>
      </div>
      <h4 className="Price">${props.price}</h4>
      <Link to={urlId}>
        <Button>comprar</Button>
      </Link>
      <br />
    </div>
  );
}

export default Item;
