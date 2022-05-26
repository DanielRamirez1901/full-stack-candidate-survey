//Declaraciones
const nombre = document.getElementById('nombre');
const totalVotos = document.getElementById('totalVotos');
const regBtn = document.getElementById('regBtn');
const usersContainer = document.getElementById('usersContainer');
const resBtn = document.getElementById('resBtn');


const goToResumen = ()=>{
    /*
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === 4){
            let json =  xhr.responseText;
            let response = JSON.parse(json);
            for(let i = 0; i < response.length ; i++){
                let userDTO = response[i];
                let view = new UserView(userDTO);
                usersContainer.appendChild( view.render() );
            //}
        }
    });
*/

    window.location.href='grafica-resumen.html';
}
resBtn.addEventListener('click' , goToResumen);


const getAllUsers = (numberImg) =>{
    let number = numberImg;
    console.log(number);
    
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === 4){
            let foto = '';
            let json =  xhr.responseText;
            let response = JSON.parse(json);
            console.log(response);

            if(number === 1){
                foto = 'img/Liga.png';
            }else if(number===2){ 
                foto = 'img/ColJusta.png';
            }else if(number===3){
                foto = 'img/EqColombia.png';
            }else if(number===4){
                foto = 'img/CentroEs.png';
            }else if(number===5){
                foto = 'img/SNacional.png';
            }else if(number===6){
                foto = 'img/PHistorico.png';
            }else if(number===7){
                foto = 'img/ColPiensa.png';
            }else if(number===8){
                foto = 'img/PVerde.png';
            }else if(number===9){
                foto = 'img/Vblanco.png';
            }
            let userDTO = new User(response[number-1].id,response[number-1].nombre,response[number-1].totalVotos,foto);
            let view = new UserView(userDTO);
            usersContainer.appendChild( view.render() );
            
        }
    });
    xhr.open('GET', 'http://localhost:8080/elecciones_candidatos/api/candidatos/all');
    xhr.send();
};
const printAllUsers = ()=>{
    getAllUsers(1);
    getAllUsers(2);
    getAllUsers(3);
    getAllUsers(4);
    getAllUsers(5);
    getAllUsers(6);
    getAllUsers(7);
    getAllUsers(8);
    getAllUsers(9);
}



printAllUsers();




