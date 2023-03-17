import React from 'react';

function Listado(props) {
  const { colaboradores, eliminarColaborador } = props;
  const handleEliminarColaborador = (id) => {
    eliminarColaborador(id);
  };

  return (
    <section>
      <h2>Listado de colaboradores</h2>
      {colaboradores.length === 0 ? (
        <p>No existen colaboradores</p>
      ) : (
        colaboradores.map((colaborador) => (
          <p key={colaborador.id}>
            {colaborador.nombre} - {colaborador.correo}
            <button 
            type="button" 
            class="btn btn-outline-info" 
            onClick={() => handleEliminarColaborador(colaborador.id)}>Eliminar</button>
          </p>
        ))
      )}
      <br />
      <hr />
      <br />
    </section>
  );
}

export default Listado;


