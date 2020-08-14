import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import PrimeraApp from './../PrimeraApp';


describe('Pruebas con <PrimeraApp />', () => {
  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo="Hola soy ,luis";
    const wraper =shallow(<PrimeraApp saludo={saludo}/>)
    expect(wraper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo mostrado por prop',()=>{
    const saludo = "Hola soy ,luis";
    const sub='soy el sub titulo..!';
    const wraper = shallow(
                      <PrimeraApp 
                        saludo={saludo} 
                        subtitulo={sub}  
                      />);

    //expect(wraper).toMatchSnapshot();
    //document.querySelector()
    const textoParrafo=wraper.find('p').text();
    expect(textoParrafo).toBe(sub);
  })
});