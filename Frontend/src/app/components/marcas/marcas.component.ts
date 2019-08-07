import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/Service/Marca.service';
import { Marca } from 'src/app/Modelo/Marca';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marcas: any = [];
  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.getMarca();
  }
  getMarca() {
    this.marcaService.getMarca().subscribe(
      (data) => {
        this.marcas = data;
      });
  }
  deleteMarca(id: number) {
    this.marcaService.deleteMarca(id).subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  }


  createMarca(marca: Marca) {
    this.marcaService.createMarca(marca).subscribe(
      data => {
        console.log(data)
      }, err => {
        console.log(err);
      });
  }




}
