import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";
import { createBuyOrderFirestore } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import "./Cartview.css";

import Swal from "sweetalert2";
import BuyForm from "./BuyForm";

function Cartview() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();
  if (cart.length === 0)
    return (
      <div style={{ marginTop: 300 }}>
        <h1>¡¡Carrito vacio!! ¿¿qué esperás para hacer tu compra??</h1>
        <img src="/Img/emptyCart.jpg" alt="" />
      </div>
    );
  function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };
    createBuyOrderFirestore(buyData).then((orderId) => {
      clear();
      navigate(`/checkout/${orderId}`);
      Swal.fire({
        title: "Gracias por tu compra!",
        text: `El identificador de tu compra es ${orderId}`,
        imageUrl: "/Img/gabiota.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
      });
    });
  }

  return (
    <div className="cartView">
      {cart.map((cartItem) => (
        <div className="view">
          <img className="imgView" src={cartItem.imgUrl} alt="" />
          <h3>{cartItem.title}</h3>
          <h4>{cartItem.price}</h4>
          <h4>{cartItem.cantidad}</h4>
          <h4>precio a pagar:{cartItem.cantidad * cartItem.price}</h4>
          <Button onClick={() => removeItem(cartItem.Key)}>eliminar</Button>
        </div>
      ))}
      <Button onClick={clear}>Vaciar carrito</Button>

      <h2>Total a pagar: {totalPriceInCart()}</h2>
      <BuyForm onSubmit={createBuyOrder} />
    </div>
  );
}

export default Cartview;
