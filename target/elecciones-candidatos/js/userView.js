class UserView{

    constructor(user){
        this.user = user;
    }

    addVote = ()=>{
        alert('Este usuario voto por' +this.user.id);
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState===4){

            }
        });
        xhr.open('PUT','http://localhost:8080/elecciones_candidatos/api/candidatos/addVote/'+this.user.id)
        xhr.send();
        console.log(this.user.totalVotos);
    }


    render = ()=>{

        let component = document.createElement('div');
        component.className = 'userComponent';
        let fotoCandidato = document.createElement('img');
        fotoCandidato.src = this.user.fotoCandidato;
        fotoCandidato.className = 'imagenCandidato';
        fotoCandidato.innerHTML = this.user.fotoCandidato;
        let votarBtn = document.createElement('votarBtn');
        votarBtn.innerHTML = 'VOTAR';
        votarBtn.className = 'votarBtn';

        component.appendChild(fotoCandidato);   
        component.appendChild(votarBtn)

        votarBtn.addEventListener('click' , this.addVote); 
        return component;
    }
}