import React, {useState, useEffect} from "react";
import Flex from "../Flex/Flex";
import ItemList from "./ItemList";
import getItemsFromAPI from "../../mockService/mockService";

function ItemListContainer() {
  const [productsList, setProductList] = useState([])
 useEffect(()=>{ getItemsFromAPI().then(
    (itemsDB)=>{
setProductList(itemsDB)
    }
  );},[])
  return (
    <div>
      <Flex>
       
    <ItemList productsList={ productsList} />
 
      </Flex>
    </div>
  );
}

export default ItemListContainer;
