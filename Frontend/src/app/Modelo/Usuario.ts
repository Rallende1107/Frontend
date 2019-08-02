import { Cargo } from './Cargo';
//import { Sucursal } from './Sucursal';

export class Usuario {
  id: number;
  rut: string;
  nombre: string;
  apellidos: string;
  password: string;
  email: string;
  cargo : Cargo;
  sucursal: string;
}
