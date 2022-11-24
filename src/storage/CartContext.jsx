import { createContext, useState } from "react";
const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.Key === itemData.Key);
    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.Key === itemData.Key) {
          itemInCart.cantidad += itemData.cantidad;

          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push(itemData);
      setCart(newCart);
    }
  }

  function removeItem(itemId) {
    const nuevoCart = cart.filter((carrito) => carrito.Key !== itemId);
    console.log(nuevoCart);
    return nuevoCart;
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.cantidad;
      return total;
    });
  }

  const value = {
    cart,
    addToCart,
    itemsInCart,
    removeItem,
  };

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;
