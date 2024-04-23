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

const celdas = {
    rut: false,
    nombre: false,
    materno: false,
    paterno: false,
    edad: false,
    email: false,
    celular: false
}

const validarFormulario = (e) => {
    switch (e.target.id){
        case "rut":
            validarCampo(expresiones.rut, e.target, 'rut');
        break;

        case "materno":
            validarCampo(expresiones.materno, e.target, 'materno');
        break;

        case "paterno":
            validarCampo(expresiones.paterno, e.target, 'paterno');
        break;
            
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "edad":
            let EdadV = e.target.value;
            if ((EdadV > 17 && EdadV < 36)) {
                document.getElementById(`grupo__edad`).classList.remove("formulario_grupo-incorrecto")
                document.getElementById(`grupo__edad`).classList.add("formulario_grupo-correcto")
                document.querySelector(`#grupo__edad .formulario_input-error`).classList.remove('formulario_input-error-activo')
                celdas['edad'] = true;
            }else{
                document.getElementById(`grupo__edad`).classList.add("formulario_grupo-incorrecto")
                document.getElementById(`grupo__edad`).classList.remove("formulario_grupo-correcto")
                document.querySelector(`#grupo__edad .formulario_input-error`).classList.add('formulario_input-error-activo')
                celdas['edad'] = false;
            }
        break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "celular":
            validarCampo(expresiones.celular, e.target, 'celular');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {

    if(expresion.test(input.value)){ // expresiones.rut.test() <-- Retorna True or False
        document.getElementById(`grupo__${campo}`).classList.remove("formulario_grupo-incorrecto")
        document.getElementById(`grupo__${campo}`).classList.add("formulario_grupo-correcto")
        document.querySelector(`#grupo__${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo')
        celdas[campo] = true;
    } else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario_grupo-incorrecto")
        document.getElementById(`grupo__${campo}`).classList.remove("formulario_grupo-correcto")
        document.querySelector(`#grupo__${campo} .formulario_input-error`).classList.add('formulario_input-error-activo')
        celdas[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(celdas.rut && celdas.paterno && celdas.materno && celdas.nombre && celdas.email &&celdas.edad && celdas.celular){
        formulario.reset();

        document.querySelectorAll('.formulario_grupo-correcto').forEach((p) => {
            p.classList.remove('formulario_grupo-correcto')
        });
    }

});
