const obtenerMensaje = require('./index.js');

test('Comprobar un mensaje de saludo', () => {
    const mensaje = obtenerMensaje();
    expect(mensaje).toBe('Hola Mundo');
});