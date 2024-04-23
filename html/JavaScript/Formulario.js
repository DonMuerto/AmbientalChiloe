const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); // const se vuelve un arreglo con todos lo inputs que se encuentran dentro del formulario

const expresiones = {
    rut: /^\d{7,9}-[kK0-9]/,
    materno: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    paterno: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,  // Letras y espacios, pueden llevar acentos.
    edad: /^\d/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{9,12}$/ // /^(6|9)(\s)?\d{4}(\s)?\d{4}$/
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "rut":
             if(expresiones.rut.test(e.target.value)){ // expresiones.rut.test() <-- Retorna True or False
                document.getElementById('grupo__rut').classList.remove("incorrecto")
             } else{
                document.getElementById('grupo__rut').classList.add("incorrecto")
             }
        break;

        case "materno":
            if(expresiones.materno.test(e.target.value)){ 
                document.getElementById('grupo__materno').classList.remove("incorrecto")
            } else{
               document.getElementById('grupo__materno').classList.add("incorrecto")
            }
        break;

        case "paterno":
            if(expresiones.paterno.test(e.target.value)){ 
                document.getElementById('grupo__paterno').classList.remove("incorrecto")
            } else{
               document.getElementById('grupo__paterno').classList.add("incorrecto")
            }
        break;
            
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){ 
                document.getElementById('grupo__nombre').classList.remove("incorrecto")
            } else{
               document.getElementById('grupo__nombre').classList.add("incorrecto")
            }
        break;

        case "edad":
            if(expresiones.edad.test(e.target.value)){
                document.getElementById('grupo__edad').classList.remove("incorrecto") 
            } else{
               document.getElementById('grupo__edad').classList.add("incorrecto")
            }
        break;

        case "email":
            if(expresiones.email.test(e.target.value)){ 
                document.getElementById('grupo__email').classList.remove("incorrecto")
            } else{
               document.getElementById('grupo__email').classList.add("incorrecto")
            }
        break;

        case "celular":
            if(expresiones.celular.test(e.target.value)){ // expresiones.celular.test() <-- Retorna True or False
                document.getElementById('grupo__celular').classList.remove("incorrecto")
            } else{
               document.getElementById('grupo__celular').classList.add("incorrecto")
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