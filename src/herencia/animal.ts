
export class Animal {
  nombre: string

  constructor(nombre: string) {
    this.nombre = nombre
  }

  hacerSonido() {
    console.log("Sonido generico")
  }
}


export class Perro extends Animal {
  hacerSonido() {
    console.log("Guau")
  }
}


// polimorfismo
export class Gato extends Animal {
  hacerSonido() {
    console.log("Miau")
  }
}
// INSTANCIACIÓN: Aquí es donde creas los animales reales
// Se colocan aquí para poder exportarlos y usarlos en otros archivos
export const miPerro = new Perro("Firulais");
export const miGato = new Gato("Michi");