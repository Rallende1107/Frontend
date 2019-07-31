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

  productos: Producto[];
  constructor(private home: HomeComponent, private servicioProducto: ProductoService) { }

  ngOnInit() {
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
