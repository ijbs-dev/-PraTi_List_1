const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro positivo: ", (input) => {
    const numero = parseInt(input);

    if (numero >= 0) {
        let fatorial = 1;

        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }

        console.log(`Fatorial de ${numero} é ${fatorial}`);
    } else {
        console.log("Por favor, digite um número inteiro positivo.");
    }

    rl.close();
});
