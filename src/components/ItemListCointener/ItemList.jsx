import React from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
function ItemList(props) {
  let emptyArray = props.productsList.length === 0;
  return (
    <>
      {emptyArray ? (
        <Loader/>
      ) : (
        props.productsList.map((product) => (
          <Item
            Key={product.id}
            title={product.titulo}
            detail={product.descripcion}
            price={product.precio}
            stock={product.stock}
            imgUrl={product.imagen}
          />
        ))
      )}
    </>
  );
}

export default ItemList;
