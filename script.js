// // 1. METODO FOREACH() 

// let newArray = ["number", "street", "string", "bom dia"]

// function somar (item, indice, array){
//     return item
// }

// function newForEach (array, callback){
//     for (let i = 0; i < array.length; i++) {
//         console.log(callback (array[i],i,array))
//     }
// }

// // let retornonewForEach = newForEach(newArray, somar)


// // 2. METODO MAP() 

// let myArr = ["maçã", "uva", "pera"];
// let myCallback = []
// function newMap (array,callback){
//     for (let i = 0; i < myArr.length; i++) {
//         myCallback.push(myArr[i] + " é muito bom!")
//     }
//     return myCallback
// }

// let retornoNewMap = newMap(myArr, myCallback)


// // 3. METODO FILTER()

// let newArray = [1, 2, 3, 4]

// function isBigEnough(item) {
//     if (item > 2){
//         console.log (item)
//     }
//   }

// function newFilter (array, callback){
//     for (let i = 0; i < array.length; i++) {
//         callback (array[i])
//     }
// }

// let retornonewFilter = newFilter(newArray, isBigEnough)

// // 3. METODO FIND()

// O método find() retorna o valor do primeiro elemento do array que 
// satisfizer a função de teste provida. Caso contrario, undefined é retornado.

// let array = [2, 1, 4, 4, 5, 10]

// function found(array) {
//     let resul
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 5) {
//             resul = array[i]
//             break;
//         } else {
//             resul = undefined
//         }
//     }
//     return resul
// }

// function newFind(array,callback) {
//         console.log(callback(array))
// }

// let retornonewnewFind = newFind(array, found)


// // 4. METODO FINDINDEX()

// O método findIndex() retorna o índice no array do primeiro elemento que 
// satisfizer a função de teste provida. Caso contrário, retorna -1, 
// indicando que nenhum elemento passou no teste.

// const ages = [3, 10, 18, 20];

// function foundIndex(array) {
//     let resul
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 18) {
//             resul = i
//             break;
//         } else {
//             resul = -1
//         }
//     }
//     return resul
// }

// function newFindIndex(array,callback) {
//         console.log(callback(array))
// }

// let retornonewFindIndex = newFindIndex(ages, foundIndex)

// // 5. METODO FINDINDEX()


// const array1 = [1, 2, 3, 4, 5];
// let resul = 0

// function reduce(acumulador, valorAtual, index, array) {
//     resul = acumulador + valorAtual
//     if (index === array.length-1){
//         console.log(acumulador)
//     }
// }

// function newReduce(array, callback,valorinicial) {
//     if (valorinicial !== undefined){
//         resul+=valorinicial
//     }
//     for (let i = 0; i < array.length; i++) {
//         callback(resul, array[i], i, array)
//     }
// }

// let retornonewReduce = newReduce(array1, reduce, 5)
