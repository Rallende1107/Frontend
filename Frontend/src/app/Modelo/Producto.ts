
import{Marca} from '../Modelo/Marca';
import { Categoria} from '../Modelo/Categoria';
import { Precio } from "../Modelo/Precio";
export class Producto  {
    id: number;
    marca:Marca ;
    modelo: String
    color: String
    categoria:  Categoria
    valorProducto:  Precio
    stock : number;

    constructor(){
      this.categoria = new Categoria();
      this.marca = new Marca();
      this.valorProducto = new Precio();
    }

  }