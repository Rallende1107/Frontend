import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../Modelo/Cargo';

 
@Injectable({
  providedIn: 'root'
})

export class CargoService {
  cargo:Cargo[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/cargos"; //ruta  para la conexion con el back

  getCargos(){ //se obtienen los datos de la url
    return this.http.get<Cargo[]>(this.Url+"/listar"); // será  necesaria la ruta ? 
  }
  createCargo(cargo:Cargo){ //creacion de un usuario
    return this.http.post<Cargo>(this.Url+"/agregar",cargo).subscribe; // /crear es la ruta y los datos que va a recibir 
  }
  deleteCargo(cargo:Cargo){
        return this.http.delete<Cargo>(this.Url+"/eliminar").subscribe;
  }
  updateCargo(cargo:Cargo){
      return this.http.put<Cargo>(this.Url+"/actualizar",cargo).subscribe;

  }
  
}