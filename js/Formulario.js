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
var Carta = document.getElementById('Carta')

Mensaje.style.color = 'red'

function Enviar() {
    var MensajeError = [];

    if (Rut.value.length !== 9 && Rut.value.length !== 10) {
        MensajeError.push('Rut debe tener 9 o 10 caracteres');
    }

    if (ApellidoM.value.length < 3 || ApellidoM.value.length > 20) {
        MensajeError.push('Apellido Materno debe tener entre 3 y 20 caracteres');
    }

    if (ApellidoP.value.length < 3 || ApellidoP.value.length > 20) {
        MensajeError.push('Apellido Paterno debe tener entre 3 y 20 caracteres');
    }

    if (Nombre.value.length < 3 || Nombre.value.length > 20) {
        MensajeError.push('Nombre debe tener entre 3 y 20 caracteres');
    }

    var EdadV = parseInt(Edad.value);
    if (isNaN(EdadV) || EdadV < 18 || EdadV > 35) {
        MensajeError.push('Edad debe ser un número entre 18 y 35');
    }

    if (Celular.value.length < 9 || Celular.value.length > 12) {
        MensajeError.push('Celular debe tener entre 9 y 12 caracteres');
    }

    Mensaje.innerHTML = MensajeError.join('<br>');
}

function CrearCarta() {
    Enviar(); // Realiza la validación antes de generar la carta

    var cartaTexto = "Carta de presentación e intención para postular al trabajo:\n\n";
    cartaTexto += "Nombre completo: " + Nombre.value + " " + ApellidoP.value + " " + ApellidoM.value + "\n";
    cartaTexto += "Rut: " + Rut.value + "\n";
    cartaTexto += "Fecha de nacimiento: " + Fecha.value + "\n";
    cartaTexto += "Edad: " + Edad.value + " años\n";
    cartaTexto += "Género: " + Genero.value + "\n";
    cartaTexto += "Email: " + Email.value + "\n";
    cartaTexto += "Celular: " + Celular.value + "\n";
    cartaTexto += "Profesión: " + Profesion.value + "\n\n";
    cartaTexto += "Motivación para postular:\n" + Motivacion.value;

    Carta.value = cartaTexto;
}