
var votos;
var nombres;

const goToResumen = () => {
    console.log('iegue aqui');
    let xhr = new XMLHttpRequest();
    var votosCandidatos = [];
    var nombresCandidatos = [];
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === 4){
            let json =  xhr.responseText;
            let response = JSON.parse(json);
            for(let i = 0; i < response.length ; i++){    
            votosCandidatos.push(response[i].totalVotos);
            nombresCandidatos.push(response[i].nombre);
            console.log('estos son los votos: '+response[i].totalVotos);
            console.log('este es el arreglo: '+votosCandidatos)
            console.log('estos son los nombres del arreglo: '+nombresCandidatos)
            }
            this.votos = votosCandidatos;
            this.nombres = nombresCandidatos;
            // Obtener una referencia al elemento canvas del DOM
            $grafica = document.querySelector("#grafica");
            // Las etiquetas son las porciones de la gráfica
            const etiquetas = [this.nombres[0], this.nombres[1], this.nombres[2], this.nombres[3],this.nombres[4],this.nombres[5],this.nombres[6],this.nombres[7],this.nombres[8]]
            console.log(votos)
            
            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datosIngresos = {
                data: [this.votos[0], this.votos[1], this.votos[2], this.votos[3], this.votos[4],  this.votos[5], this.votos[6], this.votos[7], this.votos[8]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
                backgroundColor: [
                    'rgba(163,221,203,0.5)',
                    'rgba(232,233,161,0.5)',
                    'rgba(230,181,102,0.5)',
                    'rgba(229,112,126,0.5)',
                    'rgba(93, 173, 226,0.5)',
                    'rgba(210, 180, 222,0.5)',
                    'rgba(125, 206, 160,0.5)',
                    'rgba(234, 237, 237 ,0.5)',
                    'rgba(157, 7, 243  ,0.5)',
                ],// Color de fondo
                borderColor: [
                    'rgba(163,221,203)',
                    'rgba(232,233,161)',
                    'rgba(230,181,102)',
                    'rgba(229,112,126)',
                    'rgba(93, 173, 226)',
                    'rgba(210, 180, 222)',
                    'rgba(125, 206, 160)',
                    'rgba(234, 237, 237)',
                    'rgba(157, 7, 243 )',
                ],// Color del borde
                borderWidth: 3,// Ancho del borde
                
            };
            new Chart($grafica, {
                type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
                data: {
                    labels: etiquetas,
                    fontColor: 'rgb(255,255, 255)',
                    datasets: [
                        datosIngresos,
                        // Aquí más datos...
                    ]
                },
            });
        }
        
    });
    xhr.open('GET', 'http://localhost:8080/elecciones_candidatos/api/candidatos/all');
    xhr.send();

}

goToResumen();




