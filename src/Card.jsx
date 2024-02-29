import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p>Color: {data.color}</p>
      <p>Nombre: {data.nombre}</p>
    </div>
  );
}

export default Card;
