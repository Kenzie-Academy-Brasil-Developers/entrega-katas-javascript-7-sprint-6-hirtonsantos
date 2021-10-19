// // 1. METODO FOREACH() 

let newArray = ["number", "street", "string", "bom dia"]

function somar (item, indice, array){
    return item
}

function newForEach (array, callback){
    for (let i = 0; i < array.length; i++) {
        console.log(callback (array[i],i,array))
    }
}

// let retornonewForEach = newForEach(newArray, somar)


// // 2. METODO MAP() 

let myArr = ["maçã", "uva", "pera"];
let myCallback = []
function newMap (array,callback){
    for (let i = 0; i < myArr.length; i++) {
        myCallback.push(myArr[i] + " é muito bom!")
    }
    return myCallback
}

let retornoNewMap = newMap(myArr, myCallback)


// // 3. METODO FILTER()

let newArray = [1, 2, 3, 4]

function isBigEnough(item) {
    if (item > 2){
        console.log (item)
    }
  }

function newFilter (array, callback){
    for (let i = 0; i < array.length; i++) {
        callback (array[i])
    }
}

let retornonewFilter = newFilter(newArray, isBigEnough)

// // 3. METODO FIND()

// O método find() retorna o valor do primeiro elemento do array que 
// satisfizer a função de teste provida. Caso contrario, undefined é retornado.

let array = [2, 1, 4, 4, 5, 10]

function found(array) {
    let resul
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            resul = array[i]
            break;
        } else {
            resul = undefined
        }
    }
    return resul
}

function newFind(array,callback) {
        console.log(callback(array))
}

let retornonewnewFind = newFind(array, found)


// // 4. METODO FINDINDEX()

// O método findIndex() retorna o índice no array do primeiro elemento que 
// satisfizer a função de teste provida. Caso contrário, retorna -1, 
// indicando que nenhum elemento passou no teste.

const ages = [3, 10, 18, 20];

function foundIndex(array) {
    let resul
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 18) {
            resul = i
            break;
        } else {
            resul = -1
        }
    }
    return resul
}

function newFindIndex(array,callback) {
        console.log(callback(array))
}

let retornonewFindIndex = newFindIndex(ages, foundIndex)



// // 6. METODO REDUCE()

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


// 7. METODO SOME()

let newArray = [2, 5, 8, 1, 4, 10, 12]

function isBiggerThan10(array) {
    let resul
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            resul = true
            break;
        } else {
            resul = false
        }
    }
    console.log (resul)
}

function newSome(array, callback) {
    callback(array)
}
let retornonewSome = newSome(newArray, isBiggerThan10)


// 8. METODO NEWEVERY()

let newArray = [2, 5, 8, 1, 4, 10, 10]

function isBiggerThan11(array) {
    let resul = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 11) {
            resul = true
        }
    }
    console.log (resul)
}

function newSome(array, callback) {
    callback(array)
}

let retornonewSome = newSome(newArray, isBiggerThan11)


// 9. METODO FILL()

let array = [1, 2, 3]

function changes (value, start, end){
    for (let index = start; index < end; index++) {
        array[index] = value
    }
    console.log(array)
}

function newFill (value, start, end){
        changes(value, start, end)
}

let retornonewFill = newFill(100, 1, 3)

// 10. METODO INCLUDES()

let array = [1,2,3]

function searchElement(element, indexElement) {
    let resul = false
    for (let index = indexElement; index < array.length; index++) {
        if (array[index] === element) {
            resul = true
        }
    }
    console.log(resul)
}

function newIncludes(element, indexElement) {
    searchElement(element, indexElement)
}

let retornonewIncludes = newIncludes(3,3)


// 11. METODO INDEXOF()

let array = [1,2,3]

function searchElement(element, indexElement) {
    let resul = -1
    for (let index = indexElement; index < array.length; index++) {
        if (array[index] === element) {
            resul = index
        }
    }
    console.log(resul)
}

function newIndexOf(element, indexElement) {
    searchElement(element, indexElement)
}

let retornonewIndexOf = newIndexOf(1,1)


// 12. METODO CONCAT()

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
let string = ["bom dia", "familia", "kenzinha"]
let alphaNumeric = []

function concat (valorAtual,arrayfinal){
    for (let index = 0; index < valorAtual.length; index++) {
        arrayfinal.push(valorAtual[index])
    }
}

function newConcat (){
    for (let index = 0; index < arguments.length-1; index++) {
        concat(arguments[index],arguments[arguments.length-1])
    }
    console.log(arguments[arguments.length-1])
}

let retornonewConcat = newConcat(alpha, numeric, string, alphaNumeric)


// 12. METODO JOIN()

// O método join() junta todos os elementos de um array 
// (ou um array-like object) em uma string e retorna esta string.

// arr.join([separador = ','])

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
