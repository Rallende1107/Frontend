// Autores: Joselyn Pino
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';


@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  producto:Producto[]; // usar el objeto persona
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/producto"; //ruta  para la conexion con el back

  getProducto(){ //se obtienen los datos de la url
    return this.http.get<Producto[]>(this.Url+"/productos"); // será  necesaria la ruta ?
    //return this.http.get<Producto[]>(thi.Url+ "/listar").subcribe(); ->probar
  }
  createProducto(producto:Producto){ //creacion de un usuario
    return this.http.post<Producto>(this.Url+"/add",producto); // /crear es la ruta y los datos que va a recibir
  }
  deleteProducto(id:number){
        return this.http.delete(this.Url+`/producto/${id}`);
  }
  updateProducto(producto:Producto){
      return this.http.put<Producto>(this.Url+"/producto",producto);

  }
}
