"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    Auto.prototype.encenderAuto = function () {
        console.log('rum rum');
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(direccion, abierto, autos) {
        this.direccion = direccion;
        this.abierto = abierto;
        this.autos = autos;
    }
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log(this.direccion);
        console.log(this.abierto);
        console.log(this.autos);
    };
    RegistroAutomotor.prototype.crearAuto = function (auto, arrayAuto) {
        var propiedadAuto = auto.split(',');
        var marca = propiedadAuto[0];
        var modelo = propiedadAuto[1];
        var año = Number(propiedadAuto[2]);
        var color = propiedadAuto[3];
        var nuevoAuto = new Auto(marca, modelo, año, color);
        arrayAuto.push(nuevoAuto);
    };
    return RegistroAutomotor;
}());
// Creación de instancias y pruebas
var listaAutos = [];
var registro = new RegistroAutomotor("Avenida Santagada 1900", true, listaAutos);
registro.mostrarRegistro();
registro.crearAuto("volkswagen,gol,2014,gris", listaAutos);
registro.crearAuto("volkswagen,golf,2015,negro", listaAutos);
registro.crearAuto("chevrolet,cruze,2015,blanco", listaAutos);
registro.crearAuto("fiat,multipla,2008,rojo", listaAutos);
registro.mostrarRegistro();
exports.default = Auto;
