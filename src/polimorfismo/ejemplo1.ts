
export class Vehiculo {
  marca: string

  constructor(marca: string) {
    this.marca = marca
  }

  arrancar(): void {
    console.log("El vehículo está arrancando")
  }
}

class Auto extends Vehiculo {
  arrancar(): void {
    console.log("El auto arranca con llave o botón")
  }
}

class Moto extends Vehiculo {
  arrancar(): void {
    console.log("La moto arranca con encendido eléctrico")
  }
}

export class Camion extends Vehiculo {
  arrancar(): void {
    console.log("El camión arranca con motor diésel")
  }
}
/*Creamos objetos */
export const auto = new Auto("Toyota")
export const moto = new Moto("Yamaha")
export const camion = new Camion("Volvo")

/* El Polimorfismo: Lo que hace el objeto*/
const vehiculos: Vehiculo[] = [auto, moto, camion]
vehiculos.forEach((vehiculo) => {
  vehiculo.arrancar()
})

