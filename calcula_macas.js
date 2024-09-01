function calcularValorMacas(quantidade) {
    const preco = quantidade >= 12 ? 0.25 : 0.30;
    const valorTotal = quantidade * preco;
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
}


calcularValorMacas(15);
