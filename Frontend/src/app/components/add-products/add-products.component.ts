import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/Modelo/Marca';

import { Categoria } from "src/app/Modelo/Categoria";
import { ProductoService } from 'src/app/Service/Producto.service';
import { Producto } from 'src/app/Modelo/Producto';
import{Stock} from 'src/app/Modelo/Stock';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  id: number;
  modelo: string; // nombre
  marcas: Marca[];
  color: string;
  categoria: Categoria[];
  valorProducto: number;
  stock: Stock[];
  /////
  newProducto :Producto[];
  atributoProducto : Producto;
  constructor(private servicioProducto:ProductoService) { //agrgar servicios

   }
  ngOnInit() {
  }
  create(){
    
  
  }

}