var Rut = document.getElementById('Rut');
var ApellidoM = document.getElementById('ApellidoM');
var ApellidoP = document.getElementById('ApellidoP');
var Nombre = document.getElementById('Nombre');
var Fecha = document.getElementById('Fecha');
var Edad = document.getElementById('Edad');
var Genero = document.getElementById('Genero');
var Email = document.getElementById('Email');
var Celular = document.getElementById('Celular');
var Profesion = document.getElementById('Profesion');
var Motivacion = document.getElementById('Motivacion');
var Mensaje = document.getElementById('Mensaje');
var Carta = document.getElementById('Carta');

Mensaje.style.color = 'red';

//Formatea el rut para que se ingrese con el formato esperado
function formatearRut(rut) {
    
    rut = rut.replace(/[^\dKk]/g, '');

    if (rut.length > 1) {
        rut = rut.slice(0, -1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '-' + rut.slice(-1);
    }

    return rut;
}

function Enviar() {
    var MensajeError = [];

    // Formatear el Rut antes de validar
    var rutFormateado = formatearRut(Rut.value);
    Rut.value = rutFormateado;

    // Validación del Rut
    var rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
    if (!rutRegex.test(rutFormateado)) {
        MensajeError.push('Rut no es válido. Debe estar en el formato correcto.');
    }
    // Validacion apellido Materno
    if (ApellidoM.value.length < 3 || ApellidoM.value.length > 20) {
        MensajeError.push('Apellido Materno debe tener entre 3 y 20 caracteres');
    }
    // Validacion apellido Paterno
    if (ApellidoP.value.length < 3 || ApellidoP.value.length > 20) {
        MensajeError.push('Apellido Paterno debe tener entre 3 y 20 caracteres');
    }
    // Validacion Nombre
    if (Nombre.value.length < 3 || Nombre.value.length > 20) {
        MensajeError.push('Nombre debe tener entre 3 y 20 caracteres');
    }
    // Validacion Edad
    var EdadV = parseInt(Edad.value);
    if (isNaN(EdadV) || EdadV < 18 || EdadV > 35) {
        MensajeError.push('Edad debe ser un número entre 18 y 35');
    }
    // Validacion Celular
    if (Celular.value.length < 9 || Celular.value.length > 12) {
        MensajeError.push('Celular debe tener entre 9 y 12 caracteres');
    }
    //Se añaden los mensajes de error, separados por un <br>
    Mensaje.innerHTML = MensajeError.join('<br>');
}

function formatFechaNacimiento(fecha) {
    // Obtener los componentes de la fecha
    var date = new Date(fecha);
    var dia = (date.getDate() + 1);
    var mesNumero = date.getMonth(); // Obtener el número de mes (de 0 a 11)
    var año = date.getFullYear();

    // Array con los nombres de los meses en español
    var nombresMeses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    // Formatear la fecha como "día de mes de año"
    var mesNombre = nombresMeses[mesNumero]; // Obtener el nombre del mes
    return dia + ' de ' + mesNombre + ' de ' + año;
}

function CrearCarta() {
    Enviar(); // Realiza la validación antes de generar la carta

    var cartaTexto = "Carta de presentación e intención para postular al trabajo:\n\n";
    cartaTexto += "Nombre completo: " + Nombre.value + " " + ApellidoP.value + " " + ApellidoM.value + "\n";
    cartaTexto += "Rut: " + formatearRut(Rut.value) + "\n";
    cartaTexto += "Fecha de nacimiento: " + formatFechaNacimiento(Fecha.value) + "\n"; // Formatear la fecha de nacimiento
    cartaTexto += "Edad: " + Edad.value + " años\n";
    cartaTexto += "Género: " + Genero.value + "\n";
    cartaTexto += "Email: " + Email.value + "\n";
    cartaTexto += "Celular: " + Celular.value + "\n";
    cartaTexto += "Profesión: " + Profesion.value + "\n\n";
    cartaTexto += "Motivación para postular:\n" + Motivacion.value;

    Carta.value = cartaTexto;
}
