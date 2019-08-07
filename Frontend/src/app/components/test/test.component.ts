import { Component, OnInit } from '@angular/core';

import { Categoria } from '../../Modelo/Categoria';
import { CategoriaService } from '../../Service/Categoria.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  categorias: any = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategoria();
  }
  getCategoria() {
    this.categoriaService.getCategoria().subscribe(
      (data) => {
        this.categorias = data;
      });
  }


  createCategoria(categoria: Categoria) {
    this.categoriaService.createCategoria(categoria).subscribe(
      data => {
        this.categorias = data;
      }, err => {
        console.log(err);
      });
  }

  deleteProducto(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }



}
