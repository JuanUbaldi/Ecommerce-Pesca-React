import React, { useState } from "react";
import Button from "../Button/Button";

function ClickCounter({ stock, onAddToCart }) {
  let [cantidad, setCantidad] = useState(1);

  function aumentar(evt) {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }
  function disminuir(evt) {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }


  return (
    <>
      <Button color={"orange"}  onClick={aumentar}>+</Button>
      <div>cantidad de productos: {cantidad} </div>
      <Button color={"brown"} onClick={disminuir}>-</Button>
      <br />
      <Button onClick={()=>onAddToCart(cantidad)}>Agregar al carrito</Button>
    </>
  );
}

export default ClickCounter;
