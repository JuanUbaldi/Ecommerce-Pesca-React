import React from "react";

function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      <input
        
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default InputForm;
