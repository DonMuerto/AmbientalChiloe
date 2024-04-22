const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); // const se vuelve un arreglo con todos lo inputs que se encuentran dentro del formulario

const expresiones = {
    rut: /^\d{9,10}-[kK0-9]$/,
    materno: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    paterno: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,  // Letras y espacios, pueden llevar acentos.
    edad: /^\d{2}}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{9,12}$/ // /^(6|9)(\s)?\d{4}(\s)?\d{4}$/
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "rut":
             if(expresiones.rut.test(e.target.value)){ // expresiones.rut.test() <-- Retorna True or False

             } else{
                document.getElementById('grupo__rut')
             }
        break;

        case "materno":
            if(expresiones.materno.test(e.target.value)){ 

            } else{
               document.getElementById('grupo__materno')
            }
        break;

        case "paterno":
            if(expresiones.paterno.test(e.target.value)){ 

            } else{
               document.getElementById('grupo__paterno')
            }
        break;
            
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){ 

            } else{
               document.getElementById('grupo__nombre')
            }
        break;

        case "edad":
            if(expresiones.edad.test(e.target.value)){ 

            } else{
               document.getElementById('grupo__edad')
            }
        break;

        case "email":
            if(expresiones.email.test(e.target.value)){ 

            } else{
               document.getElementById('grupo__email')
            }
        break;

        case "celular":
            if(expresiones.celular.test(e.target.value)){ // expresiones.celular.test() <-- Retorna True or False

            } else{
               document.getElementById('grupo__celular')
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});
