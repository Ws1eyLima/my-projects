let nomeHeroi = ["Capitão América" , "Batman" , "Mulher Maravilha" , "Superman", "Morte", "Jesus"]
let xpHeroi = [ 3950, 5030, 6000, 7500, 9999, 1000000 ]

for (let nome of nomeHeroi) {
    // Obtendo o índice do herói atual
    let indice = nomeHeroi.indexOf(nome);
    
    // Obtendo a experiência do herói atual
    let xp = xpHeroi[indice];
    
    // Definindo o nível do herói com base na experiência
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