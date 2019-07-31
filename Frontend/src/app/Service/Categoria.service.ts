import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Modelo/Categoria';

 
@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  categoria:Categoria[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/categorias"; //ruta  para la conexion con el back

  getCategoria(){ //se obtienen los datos de la url
    return this.http.get<Categoria[]>(this.Url+"/listar"); // será  necesaria la ruta ? 
  }
  createCategoria(categoria:Categoria){ 
    return this.http.post<Categoria>(this.Url+"/agregar",categoria).subscribe; // /crear es la ruta y los datos que va a recibir 
  }
  deleteCategoria(categoria:Categoria){
        return this.http.delete<Categoria>(this.Url+"/eliminar").subscribe;
  }
  updateProducto(categoria:Categoria){
      return this.http.put<Categoria>(this.Url+"/actualizar",this.categoria).subscribe;

  }
  
}