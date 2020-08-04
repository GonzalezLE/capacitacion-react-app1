import { getUser } from '../../base/05-funciones';

describe('test de archivo 03-funciones',()=>{
  test('debe de regresar un objeto',()=>{
    
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user =getUser();
    
    expect(user).toEqual(userTest);
  })
})