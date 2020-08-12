import '@testing-library/dom';
import { getSaludo } from '../../base/02-template-string';


describe('probando el archivo  02-template-string',()=>{
  test(' getSaludo debe de regresar Hola luis',()=>{
    const nombre='luis';
    
    const saludo=getSaludo(nombre);

    expect(saludo).toBe('Hola '+nombre);
    
  })
  test('getSaludo debe de regresar hola carlos si no hay argumentos',()=>{
    const saludo = getSaludo();
    expect(saludo).toBe('Hola carlos');
    
  })
});