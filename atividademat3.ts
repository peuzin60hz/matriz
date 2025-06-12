/* Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.*/
console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: string[][] = [];
let linha: number = 2;
let coluna: number = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {

        let numero: string = teclado(`Digite o numero que vai estar no endereço [${z}, ${x}]:`)
        
        minhaMatriz[z][x] = numero;
    }
}

console.log(minhaMatriz);