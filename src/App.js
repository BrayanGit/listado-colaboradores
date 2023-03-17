import { useState } from 'react'; // hook useState
import Buscador from './component/Buscador';
import Formulario from './component/Formulario';
import Listado from './component/Listado';
import { BaseColaboradores } from './BaseColaboradores';
import './App.css';


function App() {

    const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    const [busqueda, setBusqueda] = useState('');
  
    const agregarColaborador = (nuevoColaborador) => {
      setColaboradores([...colaboradores, nuevoColaborador]);
    };

    // Función para eliminar un colaborador de la lista
  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  };

  // Función para actualizar el término de búsqueda
  const actualizarBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  // Filtrar los colaboradores según el término de búsqueda
  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    return colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });
    

    return (
      <div className="App container">
        <Buscador actualizarBusqueda={actualizarBusqueda} />
        <Formulario agregarColaborador={agregarColaborador} />
        <hr />
        <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
      </div>
    );
  }

export default App;
  

