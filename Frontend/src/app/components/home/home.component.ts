import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { faBuilding,faHome, faBars, faUsers, faArchive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  iconHome = faHome;
  iconBarras = faBars;
  iconUsers = faUsers;
  iconProductos = faArchive;
  iconSucursales = faBuilding;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['menu'], { relativeTo: this.route });
  }



  usuarios() {
    this.router.navigate(['Usuarios'], { relativeTo: this.route });
  }
  productos() {
    this.router.navigate(['Productos'], { relativeTo: this.route });
  }
  sucursales() {
    this.router.navigate(['Sucursales'], { relativeTo: this.route });
  }


  Volver() {
    this.router.navigate(['menu'], { relativeTo: this.route });
  }




  usuarioAgregar() {
    this.router.navigate(['Usuarios/Agregar'], { relativeTo: this.route });
  }
  productoAgregar() {
    this.router.navigate(['Productos/Agregar'], { relativeTo: this.route });
  }
  sucursalesAgregar() {
    this.router.navigate(['Sucursales/Agregar'], { relativeTo: this.route });
  }
  verReportesGanancias() {
    this.router.navigate(['Reportes/Ganancias'], { relativeTo: this.route });
  }
  verReportesVentas() {
    this.router.navigate(['Reportes/Ventas'], { relativeTo: this.route });
  }
  verReportesProductos() {
    this.router.navigate(['Reportes/Productos'], { relativeTo: this.route });
  }
  verReportesSucursales() {
    this.router.navigate(['Reportes/Sucursales'], { relativeTo: this.route });
  }
  AgregarCargo() {
    this.router.navigate(['Agregar/Cargos'], { relativeTo: this.route });
  }
  AgregarMarca() {
    this.router.navigate(['Nuevas/Marcas'], { relativeTo: this.route });
  }
  AgregarCategorias() {
    this.router.navigate(['Agregar/Categorias'], { relativeTo: this.route });
  }



}
