import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ClickCounter from "../ClickCounter/ClickCounter";
import cartContext from "../../storage/CartContext";
import "./itemDetail.css";

function ItemDetail(props) {
  const { addToCart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);

  function onAddToCart(cantidad) {
    const itemForCart = { cantidad, ...props };
    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="Detail">
      <div className="card">
        <div className="card-img">
          <img src={props.imgUrl} alt="Product-Img" />
        </div>
        <div className="card-details">
          <h2>{props.title}</h2>
          <h2>{props.detail}</h2>

          <h4 className="Price">${props.price}</h4>
        </div>
        {isInCart ? (
          <>
            <Link to="/">
              <Button>Volver al catálogo</Button>
            </Link>

            <Link to="/cart">
              <Button>ir al carrito</Button>
            </Link>
          </>
        ) : (
          <ClickCounter onAddToCart={onAddToCart} stock={props.stock} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
