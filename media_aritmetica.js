function calcularMediaAritmetica() {
    let soma = 0;
    let count = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Digite um número (0 para sair): "));
        if (numero !== 0) {
            soma += numero;
            count++;
        }
    } while (numero !== 0);

    if (count > 0) {
        const media = soma / count;
        console.log(`Média aritmética: ${media}`);
    } else {
        console.log("Nenhum número foi digitado.");
    }
}


calcularMediaAritmetica();
