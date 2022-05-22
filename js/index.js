//Declaraciones
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const regBtn = document.getElementById('regBtn');


regBtn.addEventListener('click',function(){
    alert('hola mundo' + nombre.value);
}
);