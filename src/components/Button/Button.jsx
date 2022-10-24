import React from "react";
import "./button.css"
function Button(props) {
  let buttonStyle = {backgroundColor:props.color}
  return <button style={buttonStyle} className="btn">{props.children}</button>;
}

export default Button;
