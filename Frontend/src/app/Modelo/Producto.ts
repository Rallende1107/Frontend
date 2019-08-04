// Autores
// Rene Allende: creacion componente
// Joselyn Pino: creacion de clases
import { Marca} from '../Modelo/Marca';
import { Categoria} from '../Modelo/Categoria';
export class Producto  {
  id: number;
  // tslint:disable-next-line: ban-types
  modelo: String;
  marca: Marca;
  // tslint:disable-next-line: ban-types
  color: String;
  categoria: Categoria;
  precio: number;
  cantidadMax: number;
  cantidadMin: number;
  constructor() {
      this.categoria = new Categoria();
      this.marca = new Marca();
    }

  }
