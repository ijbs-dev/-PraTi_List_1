const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\nMenu Principal:");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
    console.log("0. Sair");

    rl.question('Digite uma opção: ', (input) => {
        const opcao = parseInt(input, 10);

        switch (opcao) {
            case 1:
                console.log("Opção 1 selecionada");
                break;
            case 2:
                console.log("Opção 2 selecionada");
                break;
            case 3:
                console.log("Opção 3 selecionada");
                break;
            case 0:
                console.log("Saindo do menu...");
                rl.close();  
                return;
            default:
                console.log("Opção inválida, tente novamente.");
                break;
        }

        
        mostrarMenu();
    });
}


mostrarMenu();
