import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

function App () {
  
  // state 
  const [ artista, agregarArtista ] = useState('');
  const [ letra, agregarLista] = useState([]);
  const [ info, agregarInfo ] = useState({});

  // Consultar API de letras de caciones
  const consultarApiLetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    
    //consulta a la api 
    const resultado = await axios(url);

    console.log(resultado.data.lyrics);
  }

  return(
    <Fragment>
      <Formulario
        consultarApiLetra={consultarApiLetra}
      />
    </Fragment>
  );
}

export default App;