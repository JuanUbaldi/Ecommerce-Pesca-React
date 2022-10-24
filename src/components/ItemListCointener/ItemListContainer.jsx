import React from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";

function ItemListContainer() {
  return (
    <>
      <h3>anzuelos</h3>
      <Flex>
        <Item
          title="producto1"
          details="Anzuelo tamaño 1.0"
          price={200 + " x 12"}
          imgUrl="/Img/Anzuelo1.jpg"
        />
        <Item
          title="producto2"
          details="Anzuelo tamaño 2.0"
          price={250 + " x 12"}
          imgUrl="/Img/Anzuelo1.jpg"
        />
        <Item
          title="producto3"
          details="Anzuelo tamaño 3.0"
          price={300 + " x 12"}
          imgUrl="/Img/Anzuelo1.jpg"
        />
        <Item
          title="producto4"
          details="Anzuelo tamaño 4.0"
          price={400 + " x 12"}
          imgUrl="/Img/Anzuelo1.jpg"
        />
        <Item
          title="producto5"
          details="Anzuelo tamaño 5.0"
          price={410 + " x 12"}
          imgUrl="/Img/Anzuelo1.jpg"
        />
        <Item
          title="producto6"
          details="Anzuelo tamaño 6.0"
          price={500 + " x 12"}
          imgUrl="/Img/Anzuelo1.jpg"
        />
      </Flex>
      <h3>plomadas</h3>
      <Flex>
      <Item
          title="producto1"
          details="Plomada 50 gr"
          price={200 + " x unidad"}
          imgUrl="/Img/plomada1.jpg"
        />
        <Item
          title="producto2"
          details="Plomada 60 gr"
          price={210 + " x unidad"}
          imgUrl="/Img/plomada1.jpg "
        />
        <Item
          title="producto3"
          details="Plomada 70 gr"
          price={300 + " x unidad"}
          imgUrl="/Img/plomada1.jpg"
        />
        <Item
          title="producto4"
          details="Plomada 80 gr"
          price={330 + " x unidad"}
          imgUrl="/Img/plomada1.jpg"
        />
        <Item
          title="producto5"
          details="Plomada 100 gr"
          price={350 + " x unidad"}
          imgUrl="/Img/plomada1.jpg"
        />
        <Item
          title="producto6"
          details="Plomada 120 gr"
          price={370 + " x unidad"}
          imgUrl="/Img/plomada1.jpg"
        />
      </Flex>
    </>
  );
}

export default ItemListContainer;
