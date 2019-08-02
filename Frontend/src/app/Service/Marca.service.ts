import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../Modelo/Marca';

 
@Injectable({
  providedIn: 'root'
})

export class MarcaService {
  marca:Marca[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/marca"; //ruta  para la conexion con el back

  getMarca(){ //se obtienen los datos de la url
    return this.http.get<Marca[]>(this.Url+"/marcas"); // será  necesaria la ruta ? 
  }
  createMarca(marca:Marca){ //creacion de un usuario
    return this.http.post<Marca>(this.Url+"/add",marca); // /crear es la ruta y los datos que va a recibir 
  }
  deleteMarca(id:number){
       // return this.http.delete<Cargo>(this.Url+"/cargo").subscribe;
        return this.http.delete(this.Url+`/marca/${id}`);
  }
  updateMarca(marca:Marca){
      return this.http.put<Marca>(this.Url+"/marca",marca);

  }
  
}