import './style.css'
import { persona } from './index';
import { miPerro, miGato } from './index';
import { auto, moto, camion } from './index';
import { pago1, pago2, pago3 } from './index';
import { cuenta } from "./index" 




document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div class="contenedor">
  <div class="header-titulos">
    <h2> Bienvenido al curso de TypeScript</h2>
    <p>Tema: interfaces, herencia, polimorfismo y encapsulamiento</p>
  </div>

    <div class="card">
      <h3>Información del programador</h3>
      <p><strong>Programador:</strong> ${persona.nombre}</p>
      <p><strong>Edad:</strong> ${persona.edad} años</p>
      <p><strong>Dirección:</strong> ${persona.direcion}</p>
      <p><strong>Teléfono:</strong> ${persona.telefono}</p>
    </div>
    <div class="card-animales">
      <h3>Información de los animales</h3>
      <p><strong>Nombre del perro:</strong> ${miPerro.nombre}</p>
      <p><strong>Nombre del gato:</strong> ${miGato.nombre}</p>
    </div>
    <div class="coche-card">
      <h3>Información de los vehículos</h3>
      <p><strong>Coche:</strong> ${auto.marca}</p>
      <p><strong>Moto:</strong> ${moto.marca}</p>
      <p><strong>Camión:</strong> ${camion.marca}</p>
    </div>
    <div class="pago-card">
      <h3>Información de los pagos</h3>
      <p><strong>Pago con tarjeta:</strong> ${pago1.pagar(100)}</p>
      <p><strong>Pago en efectivo:</strong> ${pago2.pagar(200)}</p>
      <p><strong>Pago por transferencia:</strong> ${pago3.pagar(300)}</p>
    </div>
     <div class="card">
    <h3>Cuenta bancaria</h3>
    <p><strong>Saldo actual:</strong> ${cuenta.verSaldo()}</p>
  </div>
  </div>
`




