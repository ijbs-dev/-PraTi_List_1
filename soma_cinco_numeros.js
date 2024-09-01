const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function pedirNumero() {
    rl.question(`Digite o número ${contador + 1}: `, (input) => {
        const numero = parseFloat(input);
        if (!isNaN(numero)) {
            soma += numero;
            contador++;
        } else {
            console.log("Por favor, digite um número válido.");
        }

        if (contador < 5) {
            pedirNumero();  // Continua pedindo até que 5 números sejam inseridos
        } else {
            console.log(`Soma total: ${soma}`);
            rl.close();  // Fecha a interface após completar o loop
        }
    });
}

pedirNumero();  // Inicia o processo de pedir números
