// Autores
// Rene Allende: creacion componente
// Joselyn Pino: creacion de clasesimport { Cargo } from './Cargo';
import {Cargo} from '../Modelo/Cargo';
export class Usuario {
  id: number;
  rut: string;
  nombre: string;
  apellidos: string;
  password: string;
  email: string;
  cargo: Cargo;
  sucursal: string;
}
