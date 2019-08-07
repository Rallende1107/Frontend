// Autores: Joselyn Pino
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../Modelo/Marca';


@Injectable({
  providedIn: 'root'
})

export class MarcaService {
  LstMarca: Marca; // usar el objeto persona
  Url = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  getMarca() {
    return this.http.get<Marca[]>(this.Url + '/marcas'); // será  necesaria la ruta ?
  }
  createMarca(marca: Marca) {
    return this.http.post<Marca>(this.Url + '/marca/add', marca); // /crear es la ruta y los datos que va a recibir
  }
  deleteMarca(id: number) {
       // return this.http.delete<Cargo>(this.Url+"/cargo").subscribe;
    return this.http.delete(this.Url + `/marca/${id}`);
  }
  updateMarca(marca: Marca){
      return this.http.put<Marca>(this.Url + '/marca', marca);
  }
}
