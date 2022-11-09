import React, { useState, useEffect } from "react";
import { getItemFromAPI } from "../../mockService/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailCont(props) {
 
  const [producto, setProducto] = useState([]);
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    getItemFromAPI(id).then((Product) => {
      setProducto(Product);
    });
  }, []);

  return (
    <ItemDetail
      Key={producto.id}
      title={producto.titulo}
      detail={producto.descripcion}
      price={producto.precio}
      stock={producto.stock}
      imgUrl={producto.imagen}
    />
  );
}

export default ItemDetailCont;
