
export class Producto {
  nombre: string
  precio: number

  constructor(nombre: string, precio: number) {
    this.nombre = nombre
    this.precio = precio
  }

  mostrarPrecio(): void {
    console.log(`El precio del producto es ${this.precio}`)
  }
}

export class ProductoConDescuento extends Producto {
  mostrarPrecio(): void {
    const descuento = this.precio * 0.1
    const precioFinal = this.precio - descuento
    console.log(`El producto con descuento cuesta ${precioFinal}`)
  }
}

export class ProductoPremium extends Producto {
  mostrarPrecio(): void {
    const impuesto = this.precio * 0.2
    const precioFinal = this.precio + impuesto
    console.log(`El producto premium cuesta ${precioFinal}`)
  }
}
