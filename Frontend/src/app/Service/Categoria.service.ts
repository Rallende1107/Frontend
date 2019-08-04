import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Modelo/Categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  categoria: Categoria[];


  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080';

  getCategoria() {
    return this.http.get<Categoria[]>(this.Url + '/categorias');
  }
  createCategoria(categoria: Categoria) {
    return this.http.post<Categoria>(this.Url + '/categoria/add', categoria); // /crear es la ruta y los datos que va a recibir 
  }
  deleteCategoria(id: number) {
       // return this.http.delete<Categoria>(this.Url+"/eliminar").subscribe;
        return this.http.delete(this.Url + '/categoria/${id}');
      }
  updateProducto(categoria: Categoria){
      return this.http.put<Categoria>(this.Url + '/categoria', this.categoria).subscribe();

  }
}
