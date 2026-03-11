
export class MetodoPago {
  pagar(monto: number): string {
    return `Pagando ${monto}`
  }
}

export class PagoTarjeta extends MetodoPago {
  pagar(monto: number): string {
    return `Pagando ${monto} con tarjeta`
  }
}

export class PagoEfectivo extends MetodoPago {
  pagar(monto: number): string {
    return `Pagando ${monto} en efectivo`
  }
}

export class PagoTransferencia extends MetodoPago {
  pagar(monto: number): string {
    return `Pagando ${monto} por transferencia`
  }
}

export const pago1 = new PagoTarjeta()
export const pago2 = new PagoEfectivo()
export const pago3 = new PagoTransferencia()