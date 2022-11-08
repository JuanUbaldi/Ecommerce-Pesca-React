import React, {useState} from 'react'

function ClickCounter(props) {
    let [cantidad, setCantidad]= useState(1)
let stock = 5
function aumentar(){
    if (cantidad < stock){
        setCantidad(cantidad+1)
    }
}
function disminuir(){
    if (cantidad > 1){
        setCantidad(cantidad-1)
    }
}

  return (
    <>
    <button onClick={aumentar}>+</button>
    <div>cantidad de productos: {cantidad} </div>
    <button onClick={disminuir}>-</button>
    </>
  )
}

export default ClickCounter