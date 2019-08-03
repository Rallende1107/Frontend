// Autores
// Rene Allende: creacion componente
// Joselyn Pino: creacion de clases
import{Marca} from '../Modelo/Marca';
import { Categoria} from '../Modelo/Categoria';
//import { Precio } from "../Modelo/Precio";
import{Stock} from '../Modelo/Stock';
export class Producto  {
    id: number;
    marca:Marca ;
    modelo: String
    color: String
    categoria:  Categoria
    valorProducto:  number;
    //stock : number;
    stock :Stock;
    constructor(){
      this.categoria = new Categoria();
      this.marca = new Marca();
     this.stock = new Stock();
    }

  }
