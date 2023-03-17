import React from 'react';
import '../cascada/Buscador.css';

function Buscador(props) {
  const { actualizarBusqueda } = props;

  return (
    <header>
      <div className="row">
        <div className="col-8">
          <h1>Buscador de colaboradores</h1>
        </div>
        <div className="col-4">
          <input 
            onChange={actualizarBusqueda}
            type="search" 
            name="buscador" 
            id="buscador" 
            placeholder="Ingrese nombre" 
          />
        </div>
      </div>
    </header>
  );
}

export default Buscador;



