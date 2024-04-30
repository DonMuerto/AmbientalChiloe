const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); // const se vuelve un arreglo con todos lo inputs que se encuentran dentro del formulario

const expresiones = {
    rut: /^\d{7,9}-[kK0-9]$/,
    materno: /^[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    paterno: /^[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ]{3,20}$/,  // Letras y espacios, pueden llevar acentos.
    edad: /^\d/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{9,12}$/ // /^(6|9)(\s)?\d{4}(\s)?\d{4}$/
}

var genero = "Otro";
let selectGenero = document.getElementById('Genero');
let text_area = document.getElementById('carta');
let fecha = document.getElementById('fecha');


selectGenero.addEventListener('change', function() {
    genero = selectGenero.value; 
});


const celdas = {
    rut: false,
    nombre: false,
    materno: false,
    paterno: false,
    edad: false,
    email: false,
    celular: false
}

$(document).ready(function(){
    $("#rut").keyup(function(){
        let rut= $(this).val();
        if(expresiones.rut.test(rut)){
            document.getElementById(`grupo__rut`).classList.remove("formulario_input-error")
            document.querySelector(`#grupo__rut .inputStyle`).classList.add("formulario_grupo-correcto")
            document.querySelector(`#grupo__rut .inputStyle`).classList.remove("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__rut .formulario_input-error`).classList.remove('formulario_input-error-activo')
            celdas["rut"] = true;
        } else{
            document.getElementById(`grupo__rut`).classList.add("formulario_input-error")
            document.getElementById(`grupo__rut`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__rut .inputStyle`).classList.add("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__rut .inputStyle`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__rut .formulario_input-error`).classList.add('formulario_input-error-activo')
            celdas["rut"] = false;
        }
    })
    $("#materno").keyup(function(){
        let materno= $(this).val();
        if(expresiones.materno.test(materno)){
            document.getElementById(`grupo__materno`).classList.remove("formulario_input-error")
            document.querySelector(`#grupo__materno .inputStyle`).classList.add("formulario_grupo-correcto")
            document.querySelector(`#grupo__materno .inputStyle`).classList.remove("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__materno .formulario_input-error`).classList.remove('formulario_input-error-activo')
            celdas["materno"] = true;
        } else{
            document.getElementById(`grupo__materno`).classList.add("formulario_input-error")
            document.getElementById(`grupo__materno`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__materno .inputStyle`).classList.add("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__materno .inputStyle`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__materno .formulario_input-error`).classList.add('formulario_input-error-activo')
            celdas["materno"] = false;
        }
    })
    $("#paterno").keyup(function(){
        let paterno= $(this).val();
        if(expresiones.paterno.test(paterno)){
            document.getElementById(`grupo__paterno`).classList.remove("formulario_input-error")
            document.querySelector(`#grupo__paterno .inputStyle`).classList.add("formulario_grupo-correcto")
            document.querySelector(`#grupo__paterno .inputStyle`).classList.remove("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__paterno .formulario_input-error`).classList.remove('formulario_input-error-activo')
            celdas["paterno"] = true;
        } else{
            document.getElementById(`grupo__paterno`).classList.add("formulario_input-error")
            document.getElementById(`grupo__paterno`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__paterno .inputStyle`).classList.add("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__paterno .inputStyle`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__paterno .formulario_input-error`).classList.add('formulario_input-error-activo')
            celdas["paterno"] = false;
        }
    })
    $("#nombre").keyup(function(){
        let nombre= $(this).val();
        if(expresiones.nombre.test(nombre)){
            document.getElementById(`grupo__nombre`).classList.remove("formulario_input-error")
            document.querySelector(`#grupo__nombre .inputStyle`).classList.add("formulario_grupo-correcto")
            document.querySelector(`#grupo__nombre .inputStyle`).classList.remove("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__nombre .formulario_input-error`).classList.remove('formulario_input-error-activo')
            celdas["nombre"] = true;
        } else{
            document.getElementById(`grupo__nombre`).classList.add("formulario_input-error")
            document.getElementById(`grupo__nombre`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__nombre .inputStyle`).classList.add("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__nombre .inputStyle`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__nombre .formulario_input-error`).classList.add('formulario_input-error-activo')
            celdas["nombre"] = false;
        }
    })
    $("#email").keyup(function(){
        let email= $(this).val();
        if(expresiones.email.test(email)){
            document.getElementById(`grupo__email`).classList.remove("formulario_input-error")
            document.querySelector(`#grupo__email .inputStyle`).classList.add("formulario_grupo-correcto")
            document.querySelector(`#grupo__email .inputStyle`).classList.remove("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__email .formulario_input-error`).classList.remove('formulario_input-error-activo')
            celdas["email"] = true;
        } else{
            document.getElementById(`grupo__email`).classList.add("formulario_input-error")
            document.getElementById(`grupo__email`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__email .inputStyle`).classList.add("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__email .inputStyle`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__email .formulario_input-error`).classList.add('formulario_input-error-activo')
            celdas["email"] = false;
        }
    })
    $("#celular").keyup(function(){
        let celular= $(this).val();
        if(expresiones.celular.test(celular)){
            document.getElementById(`grupo__celular`).classList.remove("formulario_input-error")
            document.querySelector(`#grupo__celular .inputStyle`).classList.add("formulario_grupo-correcto")
            document.querySelector(`#grupo__celular .inputStyle`).classList.remove("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__celular .formulario_input-error`).classList.remove('formulario_input-error-activo')
            celdas["celular"] = true;
        } else{
            document.getElementById(`grupo__celular`).classList.add("formulario_input-error")
            document.getElementById(`grupo__celular`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__celular .inputStyle`).classList.add("formulario_grupo-incorrecto")
            document.querySelector(`#grupo__celular .inputStyle`).classList.remove("formulario_grupo-correcto")
            document.querySelector(`#grupo__celular .formulario_input-error`).classList.add('formulario_input-error-activo')
            celdas["celular"] = false;
        }
    })
    $("#edad").keyup(function(){
        let EdadV = $(this).val();
            if ((EdadV > 17 && EdadV < 36)) {
                document.getElementById(`grupo__edad`).classList.remove("formulario_input-error")
                document.querySelector(`#grupo__edad .inputStyle`).classList.add("formulario_grupo-correcto")
                document.querySelector(`#grupo__edad .inputStyle`).classList.remove("formulario_grupo-incorrecto")
                document.querySelector(`#grupo__edad .formulario_input-error`).classList.remove('formulario_input-error-activo')
                celdas['edad'] = true;
            }else{
                document.getElementById(`grupo__edad`).classList.add("formulario_input-error")
                document.getElementById(`grupo__edad`).classList.remove("formulario_grupo-correcto")
                document.querySelector(`#grupo__edad .inputStyle`).classList.add("formulario_grupo-incorrecto")
                document.querySelector(`#grupo__edad .formulario_input-error`).classList.add('formulario_input-error-activo')
                celdas['edad'] = false;
            }
    })

})

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



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(celdas.rut && celdas.paterno && celdas.materno && celdas.nombre && celdas.email &&celdas.edad && celdas.celular){
        formulario.reset();

        document.querySelectorAll('.formulario_grupo-correcto').forEach((p) => {
            p.classList.remove('formulario_grupo-correcto')
        });
    }

});

document.getElementById('generarCAR').addEventListener('click', () => {
    const datos = [];

    if(celdas.rut && celdas.paterno && celdas.materno && celdas.nombre && celdas.email &&celdas.edad && celdas.celular){
        for (var i = 0; i < inputs.length; i++){
            let dato = inputs[i].value;
            datos.push(dato);
        }

        datos.splice(6, 0, genero);

        let cartaTexto = "Carta de presentación e intención para postular al trabajo:\n\n";
        cartaTexto += "Nombre completo: " + datos[3] + " " + datos[2] + " " + datos[1] + "\n";
        cartaTexto += "Rut: " + datos[0] + "\n";
        cartaTexto += "Fecha de nacimiento: " + formatFechaNacimiento(fecha.value) + "\n"; 
        cartaTexto += "Edad: " + datos[5] + " años\n";
        cartaTexto += "Género: " + datos[6] + "\n";
        cartaTexto += "Email: " + datos[7] + "\n";
        cartaTexto += "Celular: " + datos[8] + "\n";
        cartaTexto += "Profesión: " + datos[9] + "\n\n";
        cartaTexto += "Motivación para postular: " + datos[10];

        text_area.value = cartaTexto
    }else{
        text_area.value = 'Debe de ingresar los datos solicitados' ;
    }
    
    });
