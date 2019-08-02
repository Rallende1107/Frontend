import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Producto } from '../../Modelo/Producto';
import { ProductoService } from 'src/app/Service/Producto.service';
import { faPlusCircle, faExclamationTriangle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Marca } from 'src/app/Modelo/Marca';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit {

  //iconos
  iconAdd = faPlusCircle;
  iconEdit = faEdit;
  iconDelete = faExclamationTriangle;
  
  producto :any= []; // seria igual que producto = producto[];?  estos datos se deberian mostrar en la datebase

  constructor(private home: HomeComponent, private servicioProducto: ProductoService) { }

  ngOnInit() {
    this.getProductos(); // se llama metodo que contiene el servicio

  }
  getProductos(){
    this.servicioProducto.getProducto().subscribe(
      (data)=>{
        this.producto =data;
      }
    )
  }
  createProducto(producto : Producto){
    this.servicioProducto.createProducto(producto).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err)
    })

  }
  deleteProducto(id:number){
   //agregar alerta de c
    this.servicioProducto.deleteProducto(id).subscribe(
      data => {
        console.log(data)
      },err =>{
        console.log(err)
      })
  }
  ProductoEditar() {
    this.home.router.navigate(["Productos/Modificar"], { relativeTo: this.home.route })
  }

  create(producto) {
    

    /*hay que asegurarse de que producto sea bien enviado debido a que por ejemplo, como Marca
    esta enviando solo un string dejo un ejemplo*/
    producto.Marca = { nombre: "algo", marca: producto.Marca };
    console.log(producto);

    // this.servicioProducto.createProducto(producto).subscribe(data=>{
    //   console.log("se ah agregado bien");
    // },err=>{
    //   console.log("errror");
    // })
  }

}
