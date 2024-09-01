function verificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo Equilátero");
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo Isósceles");
        } else {
            console.log("Triângulo Escaleno");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo");
    }
}

// Testes
verificarTriangulo(3, 4, 5);  
verificarTriangulo(2, 2, 2);  
verificarTriangulo(4, 4, 6);  
verificarTriangulo(10, 2, 2); 
verificarTriangulo(5, 5, 8);  
verificarTriangulo(7, 7, 7);  
verificarTriangulo(1, 2, 3);  
verificarTriangulo(3, 3, 5);  
verificarTriangulo(7, 10, 5); 
verificarTriangulo(8, 6, 10); 
