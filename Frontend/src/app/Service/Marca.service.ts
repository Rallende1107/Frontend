import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../Modelo/Marca';

 
@Injectable({
  providedIn: 'root'
})

export class MarcaService {
  marca:Marca[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/marcas"; //ruta  para la conexion con el back

  getMarca(){ //se obtienen los datos de la url
    return this.http.get<Marca[]>(this.Url+"/listar"); // será  necesaria la ruta ? 
  }
  createMarca(marca:Marca){ //creacion de un usuario
    return this.http.post<Marca>(this.Url+"/agregar",marca).subscribe; // /crear es la ruta y los datos que va a recibir 
  }
  deleteMarca(marca:Marca){
        return this.http.delete<Marca>(this.Url+"/eliminar").subscribe;
  }
  updateMarca(marca:Marca){
      return this.http.put<Marca>(this.Url+"/actualizar",marca).subscribe;

  }
  
}