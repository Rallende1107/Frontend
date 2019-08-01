import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import { SucursalService} from '../../Service/Sucursal.service';

@Component({
  selector: 'app-show-all-sucursales',
  templateUrl: './show-all-sucursales.component.html',
  styleUrls: ['./show-all-sucursales.component.css']
})
export class ShowAllSucursalesComponent implements OnInit {

  sucursales : any = [];

  constructor( private home: HomeComponent, private sucursalService: SucursalService) { }

  SucursalEditar(){

    this.home.router.navigate(['Sucursales/Modificar'], { relativeTo: this.home.route });
  }

  ngOnInit() {
    this.getSucursales();
  }

  getSucursales(){
    this.sucursalService.getSucursal().subscribe(
      (res)=>{
        this.sucursales = res;
      }
    )
  }

  agregarSucursal(sucursal){
    console.log(sucursal);
  }

}
