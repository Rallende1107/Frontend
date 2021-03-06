import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../Modelo/Stock';

 
@Injectable({
  providedIn: 'root'
})

export class StockService {
  stock:Stock[]; // usar el objeto persona 
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/stock"; //ruta  para la conexion con el back

  getStock(){ //se obtienen los datos de la url
    return this.http.get<Stock[]>(this.Url+"/listar"); // será  necesaria la ruta ? 
  }
  createStock(stock:Stock){ //creacion de un usuario
    return this.http.post<Stock>(this.Url+"/agregar",stock).subscribe; // /crear es la ruta y los datos que va a recibir 
  }
  deleteStock(stock:Stock){
        return this.http.delete<Stock>(this.Url+"/eliminar").subscribe;
  }
  updateStock(stock:Stock){
      return this.http.put<Stock>(this.Url+"/actualizar",stock).subscribe;

  }
  
}