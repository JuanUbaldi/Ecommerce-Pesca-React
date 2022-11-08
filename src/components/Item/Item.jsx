import React from "react";
import Button from "../Button/Button";
import "./item.css";
function Item(props) {
  return (
    
    <div className="card">
      <div className="card-img">
      <img  src={props.imgUrl} alt="Product-Img" />
       </div>
       <div className="card-details">
      <h2>{props.title}</h2>
      <h2>{props.detail}</h2>
      </div>
      <h4 className="Price">${props.price}</h4>
      <Button>comprar</Button>
    </div>
    
  );
}

export default Item;
