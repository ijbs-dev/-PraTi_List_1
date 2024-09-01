console.log("Início do script");

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    }
    if (numero % 2 !== 0) {
        console.log(`${numero} é ímpar`);
    }
}

for (let i = 1; i <= 10; i++) {
    verificarParOuImpar(i);
}