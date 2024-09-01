 /* function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

exibirTabuada(5);  */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 1 a 10: ", (input) => {
    const numero = parseInt(input);
    if (numero >= 1 && numero <= 10) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    } else {
        console.log("Por favor, digite um número válido.");
    }

    rl.close    

});