class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    
    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(pet) {
        this.mascotas.push(pet)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(name, author) {
        this.libros.push({name, author})
    }
    getBookNames() {
        console.log(this.libros.map(i => i.name));
    }
}

const test123 = new Usuario("Tomas", "Arrillaga");
test123.getFullName();
test123.addMascota('Perro')
test123.addMascota('Gato')
test123.countMascotas();
test123.addBook("Lean Startup", "Eric Ries")
test123.addBook('No rules rule' , 'Reeds Hastings')
test123.getBookNames();