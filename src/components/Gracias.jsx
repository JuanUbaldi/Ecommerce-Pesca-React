import React from "react";

export default function Gracias(props) {
  const {
    iframeSource = '<iframe src="https://www.google.com.ar/maps/d/embed?mid=1E1m-X4rZJ0F5okoXNq6HyJZ9kROLIo8D&ehbc=2E312F" width="640" height="480"></iframe>',
  } = props;
  return (
    <>
      <div
        className="App"
        dangerouslySetInnerHTML={{ __html: iframeSource }}
      ></div>
      <h3>
        ¡¡Acá te dejemos los puntos pesqueros para que puedas disfrutar de
        nuestras riquezas pesqueras!!
      </h3>
      <h2>Gracias por tu compra y que tengas una excelente jornada de pesca</h2>
    </>
  );
}
