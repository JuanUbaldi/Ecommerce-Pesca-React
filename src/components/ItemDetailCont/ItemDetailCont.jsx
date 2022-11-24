import React, { useState, useEffect } from "react";
import { getItemFromAPI } from "../../mockService/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemDetailCont(props) {
 
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    getItemFromAPI(id).then((Product) => {
      setProducto(Product);
      
    })
    .catch(
      (error)=>{
        console.error(error)
        
      }
    )
    .finally( ()=>
      setIsLoading(false)
    )
    
  }, [id]);

  return (
   <> {isLoading? <Loader color="blue"   /> : 
    <ItemDetail
      Key={producto.id}
      title={producto.titulo}
      detail={producto.descripcion}
      price={producto.precio}
      stock={producto.stock}
      imgUrl={producto.imagen}
    />}
    </> 
  );
}

export default ItemDetailCont;
