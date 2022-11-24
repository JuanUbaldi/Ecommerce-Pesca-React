import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";
function Cartview() {
  const { cart, removeItem } = useContext(cartContext);
  return (
    <div>
      <h1>Esta es tu compra</h1>
      {cart.map((cartItem) => (
        <div>
          <img src={cartItem.imgUrl} alt="" />
          <h3>{cartItem.title}</h3>
          <h4>{cartItem.price}</h4>
          <h4>{cartItem.cantidad}</h4>
          <h4>precio a pagar:{cartItem.cantidad * cartItem.price}</h4>
          <Button onClick={() => removeItem(cartItem.Key)}>eliminar</Button>
        </div>
      ))}
    </div>
  );
}

export default Cartview;
