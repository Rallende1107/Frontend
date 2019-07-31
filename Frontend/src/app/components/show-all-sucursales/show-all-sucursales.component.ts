import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-show-all-sucursales',
  templateUrl: './show-all-sucursales.component.html',
  styleUrls: ['./show-all-sucursales.component.css']
})
export class ShowAllSucursalesComponent implements OnInit {

  constructor( private home: HomeComponent) { }

  SucursalEditar(){

    this.home.router.navigate(['Sucursales/Modificar'], { relativeTo: this.home.route });
  }

  ngOnInit() {
  }

  agregarSucursal(sucursal){
    console.log(sucursal);
  }

}
