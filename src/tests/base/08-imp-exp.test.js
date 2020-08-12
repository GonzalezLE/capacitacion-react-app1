
import { getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('pruebas en funciones de heroes',()=>{

  test('debe de retornar un heroe por id',()=>{
    const id=1;
    const heroe = getHeroeById(id);
    
    const heroeData = heroes.find(h=>h.id===id);
    
    expect(heroe).toEqual(heroeData);
  })

  test('debe de retornar undefined si no existe el heroe ', () => {

    const id = 20;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  })

  test('debe de retornar un arreglo con los heroes de DC', () => {

    const owners='DC';
    const datos = heroes.filter((h) => h.owner === owners);
    const heroesDC=getHeroesByOwner(owners);
    
    expect(heroesDC).toEqual(datos);
  })

  test('debe de retornar un arreglo de 2 con los heroes de Marvel ', () => {

    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
    
    let tamano = heroesMarvel.length
    expect(tamano).toBe(2)
  })
})