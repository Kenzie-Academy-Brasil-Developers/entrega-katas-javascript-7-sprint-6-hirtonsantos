// A função reducer recebe quatro parâmetros:

// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)

const array1 = [1, 2, 3, 4, 5];
let resul = 0

function reduce(acumulador, valorAtual, index, array) {
    resul = acumulador + valorAtual
    if (index === array.length-1){
        console.log(acumulador)
    }
}

function newFindIndex(array, callback,valorinicial) {
    if (valorinicial !== undefined){
        resul+=valorinicial
    }
    for (let i = 0; i < array.length; i++) {
        callback(resul, array[i], i, array)
    }
}

let retornonewFindIndex = newFindIndex(array1, reduce, 5)
