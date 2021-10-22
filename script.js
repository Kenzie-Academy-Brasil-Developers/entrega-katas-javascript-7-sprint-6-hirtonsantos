// // // // 1. METODO FOREACH() 

let newArray = ["number", "street", "string", "bom dia"]

function somar (item, indice, array){
    return item
}

function newForEach (array, callback){
    for (let i = 0; i < array.length; i++) {
        console.log(callback (array[i],i,array))
    }
}

let retornonewForEach = newForEach(newArray, somar)


// // // // 2. METODO MAP() 

let time = ["Juventus", "Palermo", "Everton"]

function completeString (string) {
    return string + " é muito bom!"
}

function newMap (array,callback){
    let myArr = []
    for (let i = 0; i < array.length; i++) {
        let resul = callback(array[i])
        myArr.push(resul)
    }
    console.log (myArr)
}

let retornoNewMap = newMap(["Jantar", "Malhar", "Dormir"], completeString)

// // // // 3. METODO FILTER()

let newArrayFilter = [] 
function isBigEnough(item) {
    if (item > 2){
        newArrayFilter.push(item)
    }
}

function newFilter (array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
    console.log(newArrayFilter)
}

let retornonewFilter = newFilter([5,6], isBigEnough)

// // // // 4. METODO FIND()

// // // O método find() retorna o valor do primeiro elemento do array que 
// // // satisfizer a função de teste provida. Caso contrario, undefined é retornado.

let array = [2, 1, 10, 4, 5, 5]

function found(element) {  
    if (element > 5) {
            return element
        }
}

function newFind(array,callback) {
    let resul
    for (let i = 0; i < array.length; i++) {
        resul = callback(array[i], i, array)
        if (resul > 5){
            break;
        }
    }
    console.log(resul)
}
let retornonewnewFind = newFind(array, found)


// // // // 5. METODO FINDINDEX()

// // // O método findIndex() retorna o índice no array do primeiro elemento que 
// // // satisfizer a função de teste provida. Caso contrário, retorna -1, 
// // // indicando que nenhum elemento passou no teste.

const ages = [5, 99, 19, 20];

function foundIndex(array, i) {
        if (array > 18) {
            return i
        } else {
            return -1
        }
}

function newFindIndex(array,callback) {
    let resul
    for (let i = 0; i < array.length; i++) {
        resul = callback(array[i], i, array)
        if (array[i] > 18){
            break;
        }
    }
    console.log(resul)
}
let retornonewFindIndex = newFindIndex(ages, foundIndex)



// // // // 6. METODO REDUCE()

const array1 = [1, 2, 3, 4, 5];
let resul = 0

function reduce(acumulador, valorAtual, index, array) {
    resul = acumulador + valorAtual
    if (index === array.length-1){
        console.log(acumulador)
    }
}

function newReduce(array, callback,valorinicial) {
    if (valorinicial !== undefined){
        resul+=valorinicial
    }
    for (let i = 0; i < array.length; i++) {
        callback(resul, array[i], i, array)
    }
}

let retornonewReduce = newReduce(array1, reduce, 5)


// // // 7. METODO SOME()

let newArraySome = [2, 5, 8, 1, 4, 10, 11]

function isBiggerThan10(array) {
    if (array > 10) {
        return true
    } else {
        return false
    }
}

function newSome(array, callback) {
    let resul 
    for (let i = 0; i < array.length; i++) {
        resul = callback(array[i])
        if (resul === true){
            break;
        }
    }
    console.log(resul)
}
let retornonewSome = newSome(newArraySome, isBiggerThan10)

// // // 8. METODO NEWEVERY()

let newArrayEvery = [2, 5, 8, 1, 4, 10, 10]

function isBiggerThan11(array) {
        if (array > 11) {
            return true
        } else {
            return false
        }
}

function newEvery(array, callback) {
    let resul
    for (let i = 0; i < array.length; i++) {
        resul = callback(array[i],i,array)
        if (resul === true) {
            break;
        }
    }
    console.log(resul)
}

let retornnewEvery = newEvery([1,2,3,15], isBiggerThan11)



// // // 9. METODO FILL()

let arrayFill = [1, 2, 3]

function changes (value, start, end){
    for (let index = start; index < end; index++) {
        arrayFill[index] = value
    }
    console.log(array)
}

function newFill (value, start, end){
        changes(value, start, end)
}

let retornonewFill = newFill(100, 1, 3)

// // // 10. METODO INCLUDES()

let arrayIncludes = [1,2,3]

function newIncludes(element, indexElement) {
    let resul = false
    for (let index = indexElement; index < arrayIncludes.length; index++) {
        if (arrayIncludes[index] === element) {
            resul = true
        }
    }
    console.log(resul)
}

let retornonewIncludes = newIncludes(3,2)


// // // // 11. METODO INDEXOF()

function newIndexOf(array, element, indexElement) {
    let resultado = -1
    for (let index = indexElement; index < array.length; index++) {
        if (array[index] === element) {
            resultado = index
        }
    }
    console.log(resultado)
}

let retornonewIndexOf = newIndexOf([2, 5, 9], 5, 1)

// // // 12. METODO CONCAT()

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
let string = ["bom dia", "familia", "kenzinha"]

function concat (arrayatual,arrayfinal){
    for (let index = 0; index < arrayatual.length; index++) {
        arrayfinal.push(arrayatual[index])
    }
}

function newConcat (...arrays){
    let alphaNumeric = []
    for (let i = 0; i < arrays.length; i++) {
        concat(arrays[i],alphaNumeric)
    }
    console.log(alphaNumeric)
}

let retornonewConcat = newConcat(alpha, numeric, string)


// // // 13. METODO JOIN()

// // // O método join() junta todos os elementos de um array 
// // // (ou um array-like object) em uma string e retorna esta string.

// // // arr.join([separador = ','])

const elements = ['Fire', 'Air', 'Water'];

function join(separador) {
    let string = ""
    for (let index = 0; index < elements.length; index++) {
        string+=elements[index]
        if (index !== elements.length-1){
        string+=separador
        }
    }
    console.log(string)
}

function newJoin(separador) {
    if (separador === undefined){
        separador = ","
    }
    join(separador)
}

let retornonewJoin = newJoin()
