import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo})=>{
  return(
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo} </p>
    </>
  )
}
PrimeraApp.propTypes={
  saludo: PropTypes.number.isRequired
};
PrimeraApp.dedaultProps={
  subtitulo:'soy un sub titulo'
}
export default PrimeraApp;