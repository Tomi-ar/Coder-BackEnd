const fs = require('fs')

let Products = {
    id: "",
    title: "",
    price: "",
    thumb: "",
}

class Contenedor {
    //para definir una variable que luego usa para id incremental
    constructor(file){
        this.file = file
    }

    async save(object) {
        try {
            let products = await fs.promises.readFile(this.file, 'utf-8')
            // push al json.
            JSON.parse(products).push(object);
            await fs.promises.writeFile(this.file, JSON.stringify(object), 'utf-8')
            console.log(object.id)
        }
        catch (err) {
            console.log("Error al guardar: ", err)
        }
    }
    
    async getById(id) {
        try{
            const products = await fs.promises.readFile(this.file, 'utf-8')
            const productsJson = JSON.parse(products)
            productsJson.find(item => item.id === id) !== undefined ? productsJson.filter(item => item.id === id) : null 
        }
        catch (err) {
            console.log("Error al obtener el producto: ", err)
        }
    }
    
    async getAll() {
        try{
            const products = await fs.promises.readFile(this.file, 'utf-8')
            console.log(JSON.parse(products));
        }
        catch (err) {
            console.log("Error al obtener todos: ", err)
        }
    }
    
    async deleteId(id) {
        try{
            const products = await fs.promises.readFile(this.file, 'utf-8')
            const productsJson = JSON.parse(products)
            const newProducts = productsJson.filter(item => item.id !== id)
            // para sobreescribir el archivo
            await fs.promises.writeFile('ruta al archivo', nJSON.stringify(newProducts, null, 2), error => {
                if (error){
                    console.log("Error al sobreescribir el archivo: ", error)
                } else {
                    console.log("guardado!")
                }
            })
        }
        catch (err) {
            console.log("Error al elimiar el id: ", err);
        }
    }
    
    async deleteAll(file) {
        try {
            await fs.promises.writeFile(this.file, '[]')
        } catch (err) {
            console.log("Error al elimiar todos: ", err)
        }
    }
}

let ejemplo1 = new Contenedor('titulo del ejemplo', 125, 'aca va el link')
console.log(ejemplo1)
let ejemplo2 = new Contenedor('otro titulo', 200, 'link2')
console.log(ejemplo2);


// async function save(object) {
//     try {
//         let products = await fs.promises.readFile('ruta al archivo', 'utf-8')
//         // push al json.
//         JSON.parse(products).push(object);
//         console.log(object.id)
//     }
//     catch (err) {
//         console.log("Error al guardar: ", err)
//     }
// }

// async function getById(id) {
//     try{
//         const products = await fs.promises.readFile('ruta al archivo', 'utf-8')
//         const productsJson = JSON.parse(products)
//         productsJson.find(item => item.id === id) !== undefined ? productsJson.filter(item => item.id === id) : null 
//     }
//     catch (err) {
//         console.log("Error al obtener el producto: ", err)
//     }
// }

// async function getAll() {
//     try{
//         const products = await fs.promises.readFile('ruta al archivo', 'utf-8')
//         console.log(JSON.parse(products));
//     }
//     catch (err) {
//         console.log("Error al obtener todos: ", err)
//     }
// }

// async function deleteId(id) {
//     try{
//         const products = await fs.promises.readFile('ruta al archivo', 'utf-8')
//         const productsJson = JSON.parse(products)
//         const newProducts = productsJson.filter(item => item.id !== id)
//         await fs.promises.writeFile('ruta al archivo', nJSON.stringify(newProducts))
//     }
//     catch (err) {
//         console.log("Error al elimiar el id: ", err);
//     }
// }

// async function deleteAll() {
//     try {
//         await fs.promises.writeFile('ruta al archivo', '[]')
//     } catch (err) {
//         console.log("Error al elimiar todos: ", err)
//     }
// }
