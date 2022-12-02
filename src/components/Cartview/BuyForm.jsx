import React, { useState } from "react";
import InputForm from "./inputForm";
import Button from "../Button/Button";

export default function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;
    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }
  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }
  return (
    <form onSubmit={onSubmit}>
      <InputForm
        title="Nombre"
        name="name"
        value={userData.name}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Email"
        name="address"
        value={userData.address}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Telefono"
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
      />

      <Button onClick={onSubmit}>Crear orden</Button>
    </form>
  );
}
