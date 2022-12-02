import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";
function CartWidget() {
  const { itemsInCart } = useContext(cartContext);
  
  return (
    <div>
      {" "}
      <Link to="/cart">
        <img src="/Img/carrito.png" alt="Product-Img" />
      </Link>
      <br />
      <div>{itemsInCart() > 0 ? <small>{itemsInCart()}</small> : <> </>}</div>
    </div>
  );
}

export default CartWidget;
