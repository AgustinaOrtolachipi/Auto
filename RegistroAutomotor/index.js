const Auto = require('./auto').default;
const Moto = require('./moto').default;

// Creación de instancias y pruebas
let listaMotos = [];
let listaAutos = [];
let registro = new RegistroAutomotor("Avenida Santagada 1900", true, listaAutos, listaMotos);

registro.mostrarRegistro();
registro.crearAuto("volkswagen,gol,2014,gris", listaAutos);
registro.crearAuto("volkswagen,golf,2015,negro", listaAutos);
registro.crearAuto("chevrolet,cruze,2015,blanco", listaAutos);
registro.crearAuto("fiat,multipla,2008,rojo", listaAutos);
registro.mostrarRegistro();
registro.modificarAuto(listaAutos, 0);
registro.mostrarRegistro();
