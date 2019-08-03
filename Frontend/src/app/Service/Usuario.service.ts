// Autores: Joselyn Pino
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  usuario:Usuario[]; // usar el objeto persona
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/usuario"; //ruta  para la conexion con el back

  getUsuarios(){ //se obtienen los datos de la url
    return this.http.get<Usuario[]>(this.Url+"/usuarios"); // será  necesaria la ruta ?
  }
  createUsuario(usuario:Usuario){ //creacion de un usuario
    return this.http.post<Usuario>(this.Url+"/add",usuario); // /crear es la ruta y los datos que va a recibir
  }
  deleteUsuario(id:number){
    return this.http.delete(this.Url+`/usuario/${id}`);
        //return this.http.delete<Usuario>(this.Url+"/eliminar").subscribe;
  }
  updateUsuario(usuario:Usuario){
      return this.http.put<Usuario>(this.Url+"usuario",usuario);

  }

}



