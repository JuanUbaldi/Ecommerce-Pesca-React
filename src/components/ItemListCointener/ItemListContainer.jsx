import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import ItemList from "./ItemList";
import { getItemsFromAPI, getItemsFromAPIByCategory} from "../../services/firebase";

import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productsList, setProductList] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid)
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductList(itemsDB);
      });
    else {
      getItemsFromAPI().then((itemsDB) => {
        setProductList(itemsDB);
      });
    }
  }, [categoryid]);
  return (
    <div>
      <Flex>
        <ItemList productsList={productsList} />
      </Flex>
    </div>
  );
}

export default ItemListContainer;
