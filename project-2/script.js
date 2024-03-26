// Weslley Lima
// Projeto 2 - DIO Logica de programação
// 25-Março-2024


function calcularNivel(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;

    
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário ";
    } else {
        nivel = "Imortal 😈"
    }
    
    return nivel;
}


let herois = {
    "Super-Homem": { vitorias: 140, derrotas: 20 },
    "Mulher-Maravilha": { vitorias: 120, derrotas: 30 },
    "Batman": { vitorias: 110, derrotas: 50 },
    "Flash": { vitorias: 90, derrotas: 60 },
    "Aquaman": { vitorias: 80, derrotas: 70 }
};

let ranking = {};
for (let heroi in herois) {
    let { vitorias, derrotas } = herois[heroi];
    ranking[heroi] = calcularNivel(vitorias, derrotas);
}

console.log("Ranking de Heróis:");
for (let heroi in ranking) {
    console.log(`${heroi}: Nível ${ranking[heroi]}`);
}
