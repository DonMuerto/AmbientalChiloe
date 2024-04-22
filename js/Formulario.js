var Rut = document.getElementById('Rut')
var ApellidoM = document.getElementById('ApellidoM')
var ApellidoP = document.getElementById('ApellidoP')
var Nombre = document.getElementById('Nombre')
var Fecha = document.getElementById('Fecha')
var Edad = document.getElementById('Edad')
var Genero = document.getElementById('Genero')
var Email = document.getElementById('Email')
var Celular = document.getElementById('Celular')
var Profesion = document.getElementById('Profesion')
var Motivacion = document.getElementById('Motivacion')
var Mensaje = document.getElementById('Mensaje')
var EdadV = parseInt(Edad.value);

Mensaje.style.color = 'red'

function Enviar() {
    var MensajeError = [];

    if (Rut.value.length > 8 && Rut.value.length < 11) {
        MensajeError.push('Rut Tiene la cantidad correcta de caracteres (9 o 10)');
    } else {
        MensajeError.push('Rut No tiene la cantidad correcta de caracteres (debe ser entre 9 y 10)');
    }

    if (ApellidoM.value.length > 2 && ApellidoM.value.length < 21){
        MensajeError.push('ApellidoM Tiene la cantidad correcta de caracteres (3 o 20)');
    } else {
        MensajeError.push('ApellidoM No tiene la cantidad correcta de caracteres (debe ser entre 3 y 20)');
    }
    if (ApellidoP.value.length > 2 && ApellidoP.value.length < 21){
        MensajeError.push('ApellidoP Tiene la cantidad correcta de caracteres (3 o 20)');
    } else {
        MensajeError.push('ApellidoP No tiene la cantidad correcta de caracteres (debe ser entre 3 y 20)');
    }
    if (Nombre.value.length > 2 && Nombre.value.length < 21){
        MensajeError.push('Nombre Tiene la cantidad correcta de caracteres (3 o 20)');
    } else {
        MensajeError.push('Nombre No tiene la cantidad correcta de caracteres (debe ser entre 3 y 20)');
    }
    var EdadV = parseInt(Edad.value);

    if (!isNaN(EdadV) && EdadV > 17 && EdadV < 36) {
        MensajeError.push('Edad tiene la cantidad correcta (entre 18 y 35 años)');
    } else {
        MensajeError.push('Edad no tiene la cantidad correcta (debe ser entre 18 y 35 años)');
    }
    if (Celular.value.length > 8 && Celular.value.length < 13){
        MensajeError.push('Celular Tiene la cantidad correcta de caracteres (9 o 12)');
    } else {
        MensajeError.push('Nombre No tiene la cantidad correcta de caracteres (debe ser entre 9 y 12)');
    }

    Mensaje.innerHTML = MensajeError.join(', ');
}