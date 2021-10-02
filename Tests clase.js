let variables = {
    nombre: 'Pepe',
    edad: 25,
    precio: 99.9,
    seriesFav: ["Dark", "Mr Robot", "Castlevania"],
};

// CLASE 2 - Ejemplo1
let numeros = [1, 2, 3]
function mostrarLista (lista) {
    if (lista == "") {
        console.log('lista vacia')
    } else {
        // return lista;
        return lista.reduce( (previous, current) => `${previous} ${current}`)
    }
}
console.log(mostrarLista(numeros))

//Ejemplo2
(function mostrarLista (lista) {
        if (lista == "") {
            console.log('lista vacia')
        } else {
            // return lista;
            return lista.reduce( (previous, current) => `${previous} ${current}`)
        }
    
    console.log(mostrarLista(numeros))
}
)(['4' , '5' , '6'])

//Ejemplo3
function createMultiplier(multiplier){
    return (multiplicand) => multiplicand * multiplier
}
const duplicate = createMultiplier(2)
const triplicate = createMultiplier(3)

//Ejemplo4
class Contador {
    static totalCount = 0;
    constructor(name) {
        this.name = name
        this.initialCount = 0
    }
    getResponsible(){
        return this.name
    }
    getIndividualCount(){
        return this.initialCount
    }
    static getTotalCount () {
        return Contador.totalCount
    }

    count() {
        this.initialCount++,
        Contador.totalCount++
    }
}