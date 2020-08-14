import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import CounterApp from './../CounterApp';

describe('testing del componente de counter app',()=>{
  test('debe de hacer mach con shapchop', () => {
    const wraper= shallow(<CounterApp/>);
    
    expect(wraper).toMatchSnapshot();
  });
  test('debe de mostrar el valor por defecto de 100', () => {
    const contador=100;
    const wraper=shallow(<CounterApp value={contador}/>);
    const contador_internon=wraper.find('h2').text().trim();
    expect(contador_internon).toBe('100');
  });
  test('usar wraper.find para buscar el elemento html del counter', () => {
    const contador=' 10 ';
    const wraper=shallow(<CounterApp/>);
    const contador_internon=wraper.find('h2').text();
    expect(contador_internon).toBe(contador);
  });
})