import React, { useState } from 'react';
import "../cascada/Formulario.css";

function Formulario(props) {
  const { agregarColaborador } = props;
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() !== '' && correo.trim() !== '') {
      agregarColaborador({
        id: new Date().getTime().toString(),
        nombre,
        correo,
      });
      setNombre('');
      setCorreo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(event) => setCorreo(event.target.value)}
      />
      <button class="btn btn-outline-info">Agregar colaborador</button>
    </form>
  );
}

export default Formulario;



