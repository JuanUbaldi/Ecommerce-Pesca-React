import React from "react";
import "./button.css"
function Button(props) {
  let buttonStyle = {backgroundColor:props.color}
  return <button color={props.color} onClick={props.onClick}  style={buttonStyle} className="btn">{props.children}</button>;
}

export default Button;
