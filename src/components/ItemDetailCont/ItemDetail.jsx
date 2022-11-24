import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ClickCounter from "../ClickCounter/ClickCounter";
import cartContext from "../../storage/CartContext";

function ItemDetail(props) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(cantidad) {
    const itemForCart = { cantidad, ...props };
    addToCart(itemForCart);
    setIsInCart(true);
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgUrl} alt="Product-Img" />
      </div>
      <div className="card-details">
        <h2>{props.title}</h2>
        <h2>{props.detail}</h2>
        <h4 className="Price">${props.price}-</h4>
      </div>
      {isInCart ? (
        <>
       
            <Button>Volver al catalogo</Button>
          
          <Button>quitar del carrito</Button>
          <Link to="/cart">
          <Button>ir al carrito</Button>
          </Link>
        </>
      ) : (
        <ClickCounter onAddToCart={onAddToCart} stock={props.stock} />
      )}
    </div>
  );
}

export default ItemDetail;
