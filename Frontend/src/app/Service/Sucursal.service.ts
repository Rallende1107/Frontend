// Autores: Joselyn Pino
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sucursal } from '../Modelo/Sucursal';


@Injectable({
  providedIn: 'root'
})

export class SucursalService {
  sucursal:Sucursal[]; // usar el objeto persona
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/sucursales"; //ruta  para la conexion con el back

  getSucursal(){ //se obtienen los datos de la url
    return this.http.get<Sucursal[]>(this.Url+"/listar"); // será  necesaria la ruta ?
  }
  createSucursal(sucursal:Sucursal){ //creacion de un usuario
    return this.http.post<Sucursal>(this.Url+"/agregar",sucursal).subscribe; // /crear es la ruta y los datos que va a recibir
  }
  deleteSucursal(sucursal:Sucursal){
        return this.http.delete<Sucursal>(this.Url+"/eliminar").subscribe;
  }
  updateSucursal(sucursal:Sucursal){
      return this.http.put<Sucursal>(this.Url+"/actualizar",sucursal).subscribe;

  }

}
