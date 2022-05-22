//Declaraciones
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const regBtn = document.getElementById('regBtn');

//Arrow function
const registrarse = () => {
    var userObj = {
        nombre: nombre.value,
        apellido: apellido.value,
        usuario: usuario.value,
        correo: correo.value,
        password: password.value,
    }

    var userObj2 = new User(
        nombre.value,
        apellido.value,
        usuario.value,
        correo.value,
        password.value,
    )
    console.log(userObj);
    console.log(userObj2);
}


regBtn.addEventListener('click', registrarse);




