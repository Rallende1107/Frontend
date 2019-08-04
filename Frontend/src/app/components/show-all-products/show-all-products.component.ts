import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Producto } from '../../Modelo/Producto';
import { ProductoService } from 'src/app/Service/Producto.service';
import { faPlusCircle, faExclamationTriangle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Marca } from 'src/app/Modelo/Marca';
import { Categoria} from 'src/app/Modelo/Categoria';
import { MarcaService} from 'src/app/Service/Marca.service';
import { CategoriaService } from 'src/app/Service/Categoria.service';
import { StockService} from 'src/app/Service/Stock.service';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})

export class ShowAllProductsComponent implements OnInit {
  iconAdd = faPlusCircle;
  iconEdit = faEdit;
  iconDelete = faExclamationTriangle;
  lstProductos: Producto[]; // seria igual que producto = producto[];?  estos datos se deberian mostrar en la datebase
  lstMarcas: Marca[];
  lstCategorias: Categoria[];
  // tslint:disable-next-line: max-line-length
  constructor( private home: HomeComponent, private servicioProducto: ProductoService, private servicioMarca: MarcaService, private servicioCategoria: CategoriaService, private servicioStock: StockService){

   }

  ngOnInit() {
    this.getProductos(); // se llama metodo que contiene el servicio
    this.getMarca();
    this.getCategoria();
  }
  //servicio productos
  getProductos() {
    this.servicioProducto.getProducto().subscribe(
      (data) => {
        this.lstProductos = data;
      }
    );
  }
  createProducto(producto: Producto) {
    this.servicioProducto.createProducto(producto).subscribe(data=>{
      console.log(data);
    }, err => {
      console.log(err);
    }
    );

  }
  deleteProducto(id: number) {
    this.servicioProducto.deleteProducto(id).subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err);
      }
      );
  }
  ProductoEditar() {
    this.home.router.navigate(["Productos/Modificar"], { relativeTo: this.home.route });
  }
  getMarca() {
    this.servicioMarca.getMarca().subscribe(
      (data) => {
        this.lstMarcas = data;
      });
  }
  createMarca(marca: Marca){
    this.servicioMarca.createMarca(marca).subscribe(
      data => {
      console.log(data)
    }, err => {
      console.log(err);
    } );
  }
  deleteMarca(id: number) {
    this.servicioMarca.deleteMarca(id).subscribe(
  data => {
    console.log(data);
  }, err => {
    console.log(err);
  });
  }
    getCategoria() {
      this.servicioCategoria.getCategoria().subscribe(
        (data) => {
          this.lstCategorias = data;
        });
    }
    createCategoria(categoria: Categoria) {
      this.servicioCategoria.createCategoria(categoria).subscribe(
        data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
    }
    deleteCategoria(id: number) {
      this.servicioCategoria.deleteCategoria(id).subscribe(
        data => {
          console.log(data);
        }, err => {
          console.log(err);
        }
      );
    }
}

