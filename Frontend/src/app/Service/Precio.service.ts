import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Precio } from '../Modelo/Precio';

 
@Injectable({
  providedIn: 'root'
})

export class PrecioService {
  precio:Precio[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/precios"; //ruta  para la conexion con el back

  getPrecio(){ //se obtienen los datos de la url
    return this.http.get<Precio[]>(this.Url+"/listar"); // será  necesaria la ruta ? 
  }
  createPrecio(precio:Precio){ //creacion de un usuario
    return this.http.post<Precio>(this.Url+"/agregar",precio).subscribe; // /crear es la ruta y los datos que va a recibir 
  }
  deletePrecio(precio:Precio){
        return this.http.delete<Precio>(this.Url+"/eliminar").subscribe;
  }
  updatePrecio(precio:Precio){
      return this.http.put<Precio>(this.Url+"/actualizar",precio).subscribe;

  }
  
}