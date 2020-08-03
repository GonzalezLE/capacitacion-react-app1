describe('Pruebas en el archivo demo.test.js',()=>{
  test('deben ser iguales los String', () => {
    //inicializacion
    const mensaje = 'Hola mundo';
    //estimulo
    const mensaje2 = "Hola mundo";
    //observar el comportamiento
    expect(mensaje).toBe(mensaje2)

  })

})
