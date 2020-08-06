import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('test de archivo 03-funciones',()=>{
  test('getUser debe de regresar un objeto',()=>{
    
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user =getUser();
    
    expect(user).toEqual(userTest);
  })
  //tarea
  test('getUsuarioActivo debe de regresar un objeto',()=>{
    const userActivoTest = {
      uid: 'ABC567',
      username: 'luis'
    }
    const usuario='luis';

    const userActivo=getUsuarioActivo(usuario);

    expect(userActivo).toEqual(userActivoTest);
  })
})