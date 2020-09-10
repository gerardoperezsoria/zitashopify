console.log(saludar('GPS'));

it('La funcion saluda', ()=>{
    expect(saludar('GPS').toBe('Hola GPS'));
})