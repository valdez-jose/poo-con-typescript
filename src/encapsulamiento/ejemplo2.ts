
export class Producto {

  private precio: number
  nombre: string

  constructor(nombre: string, precio: number) {
    this.nombre = nombre
    this.precio = precio
  }

  obtenerPrecio(): number {
    return this.precio
  }

  aplicarDescuento(porcentaje: number) {
    const descuento = this.precio * (porcentaje / 100)
    this.precio -= descuento
  }

}

export const producto = new Producto("Camisa", 100)
producto.aplicarDescuento(20)