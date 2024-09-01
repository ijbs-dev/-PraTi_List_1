// Importar módulo readline para capturar entradas do usuário via console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMediaAritmetica() {    
    let soma = 0;
    let count = 0;

    function solicitarNumero() {
        readline.question("Digite um número (0 para sair): ", (input) => {
            let numero = parseFloat(input);

            if (numero !== 0) {
                soma += numero;
                count++;
                solicitarNumero(); // Chama a função novamente para continuar recebendo números
            } else {
                if (count > 0) {
                    const media = soma / count;
                    console.log(`Média aritmética: ${media}`);
                } else {
                    console.log("Nenhum número foi digitado.");
                }
                readline.close(); // Fecha a interface de leitura
            }
        });
    }

    solicitarNumero(); // Inicia o loop de solicitação de números
}

calcularMediaAritmetica();
