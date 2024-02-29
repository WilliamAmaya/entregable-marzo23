import React, { useState } from "react";
import Card from "./Card"; // Componente Card

function App() {
  const [color, setColor] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  // Handler formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validaciones al enviar el formulario
    const colorTrimmed = color.trim();
    const nombreTrimmed = nombre.trim();
    if (colorTrimmed.length < 3 || colorTrimmed !== color) {
      setError(
        "Por favor, ingresa un color válido con al menos 3 caracteres y sin espacios en blanco al inicio."
      );
      setSubmittedData(null);
      return;
    }
    if (nombreTrimmed.length < 6) {
      setError("Por favor, ingresa un nombre con al menos 6 caracteres.");
      setSubmittedData(null);
      return;
    }
    setError("");
    setSubmittedData({ color: colorTrimmed, nombre: nombreTrimmed });
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        {/* Color */}
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          placeholder="Ingresa un color"
        />
        {/* Nombre */}
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          placeholder="Ingresa tu nombre"
        />
        {/* Botón de enviar */}
        <button type="submit">Enviar</button>
      </form>
      {/* Mostrar mensaje de error si existe */}
      {error && <p>{error}</p>}
      {/* Renderizar el componente Card si los datos son correctos */}
      {submittedData && !error && <Card data={submittedData} />}
    </div>
  );
}

export default App;
