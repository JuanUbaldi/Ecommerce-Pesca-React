import React from "react";

import Button from "../Button/Button";
import ClickCounter from "../ClickCounter/ClickCounter";

function ItemDetail(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgUrl} alt="Product-Img" />
      </div>
      <div className="card-details">
        <h2>{props.title}</h2>
        <h2>{props.detail}</h2>
        <h4 className="Price">${props.price}</h4>
      </div>

      <Button>comprar</Button>

      <br />
      <ClickCounter stock={props.stock} />
    </div>
  );
}

export default ItemDetail;
