// Weslley Lima
// Projeto 1 - DIO Logica de programação
// 23-Março-2024
 
// Variáveis
let nomeHerois = [ "Vortex" ,"Centelha " ," Galáctico" ,"Rubros" ,"Matriz" ,"Espectro" ,"Arauto" ,"Sentinela" ]
let nivelXp = [ 15597 , 7654 , 2367 , 9540 , 700 , 8159 , 1472 , 6742]

// laço de repetição
for (let i in nomeHerois) {
    
    // Obtendo o nome e a experiência do herói atual
    let nome = nomeHerois[i];
    let xp = nivelXp[i];
    
    // Definindo o nível do herói 
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    // Imprimindo o nome do herói e seu nível
    console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
}