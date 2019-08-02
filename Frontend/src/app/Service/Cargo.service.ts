import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../Modelo/Cargo';

 
@Injectable({
  providedIn: 'root'
})

export class CargoService {
  cargo:Cargo[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/cargo"; //ruta  para la conexion con el back

  getCargos(){ //se obtienen los datos de la url
    return this.http.get<Cargo[]>(this.Url+"/cargos"); // será  necesaria la ruta ? 
  }
  createCargo(cargo:Cargo){ //creacion de un usuario
    return this.http.post<Cargo>(this.Url+"/add",cargo); // /crear es la ruta y los datos que va a recibir 
  }
  deleteCargo(id:number){
       // return this.http.delete<Cargo>(this.Url+"/cargo").subscribe;
        return this.http.delete(this.Url+`/cargo/${id}`);
  }
  updateCargo(cargo:Cargo){
      return this.http.put<Cargo>(this.Url+"/cargo",cargo);

  }
  
}