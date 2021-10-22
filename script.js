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

function teste(item) {
    return item>5
}

function newFilter (array, callback){
    let newArrayFilter = [] 
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array) === true){
            newArrayFilter.push(array[i])
        }
    }
    return newArrayFilter
}

let retornonewFilter = newFilter([5,6,6], teste)

// // // // 4. METODO FIND()

// // // O método find() retorna o valor do primeiro elemento do array que 
// // // satisfizer a função de teste provida. Caso contrario, undefined é retornado.

function newFind(array,callback) {
    let resul
    for (let i = 0; i < array.length; i++) {
        resul = callback(array[i], i, array)
        if (resul === true){
            resul = array[i]
            break;
        } else {
            resul = undefined
        }
    }
    return resul
}
let retornonewnewFind = newFind(array, callback)

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


function teste1(element) {
    return element > 6
}

function teste(element, index, array) {
    return element%2!==0
}

function newEvery(array, callback) {
    let resul = true
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array) === false){
            resul = false
        }
    }
    return resul
}

let retornnewEvery = newEvery([1, 1, 1], teste) 



// // // 9. METODO FILL()


function newFill (array, value, start, end){
    if (start !== undefined){
        if (start < 0){
            start = array.length + start
        } else {
            start = start
        }
    }  
    else {
        start = 0
    }


    if (end !== undefined) {
        if (end < 0){
            end = array.length + end
        } else {
            end = end
        }
    } else {
        end = array.length
    }

    for (let index = start; index < end; index++) {
        array[index] = value
    }
    return array
}

let retornonewFill = newFill([1,1,1], 100, 0, 3)

// // // 10. METODO INCLUDES()

let teste = [1,2,3]

function newIncludes(array, element, indexElement) {
    let resul = false
    if (indexElement !== undefined){
        indexElement = indexElement
    } else {
        indexElement = 0
    }
    for (let index = indexElement; index < array.length; index++) {
        if (array[index] === element) {
            resul = true
        }
    }
    console.log(resul)
}

let retornonewIncludes = newIncludes(teste,2,0)


// // // // 11. METODO INDEXOF()

function newIndexOf(array, element, indexElement) {

    let resultado

    if (indexElement !== undefined){
        indexElement = indexElement
    } else {
        indexElement = 0
    }

    for (let index = indexElement; index < array.length; index++) {
        if (array[index] === element) {
            resultado = index
            break;
        } else {
            resultado = -1
        }
    }
    return resultado
}

let retornonewIndexOf = newIndexOf([2, 5, 5 , 9], 5, 2)

// // // 12. METODO CONCAT()

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
let string = ["bom dia", "familia", "kenzinha"]
let msg

function concat (arrayatual,arrayfinal){
    for (let index = 0; index < arrayatual.length; index++) {
        arrayfinal.push(arrayatual[index])
    }
}

function newConcat (array, ...arrays){
    array = []
    for (let i = 0; i < arrays.length; i++) {
        concat(arrays[i],array)
    }
    console.log(array)
}

let retornonewConcat = newConcat(msg, alpha, numeric, string)

// // // 13. METODO JOIN()

// // // O método join() junta todos os elementos de um array 
// // // (ou um array-like object) em uma string e retorna esta string.

// // // arr.join([separador = ','])

letelements = ['Fire', 'Air', 'Water'];

function join(array, separador) {
    let string = ""
    for (let index = 0; index < array.length; index++) {
        string+=array[index]
        if (index !== array.length-1){
        string+=separador
        }
    }
    console.log(string)
}

function newJoin(array, separador) {
    if (separador === undefined){
        separador = ","
    }
    join(array, separador)
}

let retornonewJoin = newJoin(['Fire', 'Air', 'Water'], ",")