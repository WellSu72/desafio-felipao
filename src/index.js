let jogador = "Wellington";
let experiencia = 5650;
let nivel = "";
let numeroNivel = [1,2,3,4,5,6,7,8];

//Verifica nivel do heroi "jogador"
for(let i = 0; i < numeroNivel.length; i++){
    switch(numeroNivel[i]){
        //"Se XP for menor do que 1.000 = Ferro"
        case 1:
            if (experiencia <= 1000){
                nivel = "Ferro";
                break;
            }
        //"Se XP for entre 1.001 e 2.000 = Bronze"
        case 2:
            if ((experiencia >= 1001) && (experiencia <= 2000)){
                nivel = "Bronze";
                break;
            }   
        //"Se XP for entre 2.001 e 5.000 = Prata"
        case 3:
            if ((experiencia >= 2001) && (experiencia <= 5000)){
                nivel = "Prata";
                break;
            }  
        //"Se XP for entre 5.001 e 7.000 = Ouro"
        case 4:
            if ((experiencia >= 5001) && (experiencia <= 7000)){
                nivel = "Ouro";
                break;
            } 
        //"Se XP for entre 7.001 e 8.000 = Platina"
        case 5:
            if ((experiencia >= 7001) && (experiencia <= 8000)){
                nivel = "Platina";
                break;
            } 
        //"Se XP for entre 8.001 e 9.000 = Ascendente"
        case 6:
            if ((experiencia >= 8001) && (experiencia <= 9000)){
                nivel = "Ascendente";
                break;
            }    
        //"Se XP for entre 9.001 e 10.000 = Imortal"
        case 7:
            if ((experiencia >= 9001) && (experiencia <= 10000)){
                nivel = "Imortal";
                break;
            }  
         //"Se XP for maior ou igual a 10.001 = Radiante"
         case 8:
            if (experiencia >= 10001) {
                nivel = "Radiante";
                break;
            }                                                                                
    }
}
console.log("O Herói de nome **{ "+ jogador + " }** está no nível **{ "+ nivel +" }**");