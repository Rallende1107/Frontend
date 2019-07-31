import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/Modelo/Marca';
import { Precio } from "src/app/Modelo/Precio";
import { Categoria } from "src/app/Modelo/Categoria";
import { ProductoService } from 'src/app/Service/Producto.service';
import { Producto } from 'src/app/Modelo/Producto';

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
  valorProducto: Precio[];
  stock: number;
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