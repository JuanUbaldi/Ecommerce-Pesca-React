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
  setCart(nuevoCart);
  }

 

  function totalPriceInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total += itemInCart.cantidad * itemInCart.price;
      
    });
    return total;
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.cantidad;
    });
    return total;
  }
  function clear() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    itemsInCart,
    removeItem,
    totalPriceInCart,
    clear,
  };

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;
