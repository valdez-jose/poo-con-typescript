
export interface Persona {
  nombre: string
  edad: number
  direcion?: string 
  telefono?: string 
}

export const persona: Persona  = {
  nombre: "Juan",
  edad: 25,
  direcion: "Calle 5 de junio 123 ",
  telefono: "555-1234"
}