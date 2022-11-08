import React, {useState,useEffect} from 'react'
import getItemFromAPI from "../../mockService/mockService"

function ItemDetailContainer() {
    const[product,setproduct]= useState([])
getItemFromAPI().then((itemsDB)=>{
    setProductList(itemsDB);
}); 
},[]);

return  <div className="card">
<div className="card-img">
<img  src={props.imgUrl} alt="Product-Img" />
 </div>
 <div className="card-details">
<h2>{props.title}</h2>
<h2>{props.detail}</h2>
</div>
<h4 className="Price">${props.price}</h4>
<Button>comprar</Button>
</div>
</div>
  )


export default ItemDetailContainer