
export class CuentaBancaria {

  private saldo: number

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial
  }

  depositar(monto: number) {
    this.saldo += monto
  }

  retirar(monto: number) {
    if (monto <= this.saldo) {
      this.saldo -= monto
    } else {
      console.log("Fondos insuficientes")
    }
  }

  verSaldo(): number {
    return this.saldo
  }

}

export const cuenta = new CuentaBancaria(1000)
cuenta.depositar(500)
cuenta.retirar(200)