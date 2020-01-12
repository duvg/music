import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';
import axios from 'axios';

function App () {
  
  // state 
  const [ artista, agregarArtista ] = useState('');
  const [ letra, agregarLetra] = useState([]);
  const [ info, agregarInfo ] = useState({});

  // Consultar API de letras de caciones
  const consultarApiLetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    
    //consulta a la api 
    const resultado = await axios(url);

    // Almacenar los datos en en el state
    agregarArtista(artista);
    agregarLetra(resultado.data.lyrics);
  }

  // Consultar la API para la información del artisata
  const consultarAPIInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

    const resultado = await axios(url);
    agregarInfo(resultado.data.artists[0]);
  }

  useEffect(
    () => {
      if(artista){
        consultarAPIInfo();
      }
      
    }, [artista]
  );

  return(
    <Fragment>
      <Formulario
        consultarApiLetra={consultarApiLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;