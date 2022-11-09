import React from "react";
import Item from "../Item/Item";
function ItemList(props) {
  return (
    <>
      
      {props.productsList.map((product) => (
        <Item
          Key={product.id}
          title={product.titulo}
          detail={product.descripcion}
          price={product.precio}
          stock={product.stock}
          imgUrl={product.imagen}
        />
      ))}
    </>
  );
}

export default ItemList;
