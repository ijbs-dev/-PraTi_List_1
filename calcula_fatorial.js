function calcularFatorial(numero) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`Fatorial de ${numero} é ${fatorial}`);
}


calcularFatorial(3);
