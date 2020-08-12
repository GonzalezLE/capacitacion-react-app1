import {getImagen} from './../../base/11-async-await'
describe('haciendo pruebas con asycn y await', () => {
  test('debe de regresar una url de la img', async () => {
    getImagen();
    const url= await getImagen();
    expect( url.includes('https://')).toBe(true)
  });
});