import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';

function App () {
  
  // state 
  const [ artista, agregarArtista ] = useState('');
  const [ letra, agregarLista] = useState([]);
  const [ info, agregarInfo ] = useState({});


  return(
    <Fragment>
      <Formulario />
    </Fragment>
  );
}

export default App;