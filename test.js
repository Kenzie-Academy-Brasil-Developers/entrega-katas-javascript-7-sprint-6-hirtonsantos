// newJoin

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
