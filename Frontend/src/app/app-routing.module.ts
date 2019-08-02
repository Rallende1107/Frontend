import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { ShowAllUserComponent } from './components/show-all-user/show-all-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { ReportsEarningsComponent } from './components/reports-earnings/reports-earnings.component';
import { ReportsProductsComponent } from './components/reports-products/reports-products.component';
import { AddSucursalComponent } from './components/add-sucursal/add-sucursal.component';
import { UpdateSucursalComponent } from './components/update-sucursal/update-sucursal.component';
import { ShowAllSucursalesComponent } from './components/show-all-sucursales/show-all-sucursales.component';
import { ReportsBranchOfficeComponent } from './components/reports-branch-office/reports-branch-office.component';
import { ReportsSalesComponent } from './components/reports-sales/reports-sales.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { MenuComponent } from './components/menu/menu.component';
// se debe agregar algo ? 


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'RecuperarContraseña', component: RecoveryPasswordComponent },
  {
    path: 'home',
    component: HomeComponent,
    //duda  sobre las rutas
    children: [
      { path: 'Productos/Agregar', component: AddProductsComponent },
      { path: 'Productos/Modificar', component: UpdateProductsComponent },
      { path: 'Productos', component: ShowAllProductsComponent },
      { path: 'Usuarios/Agregar', component: AddUserComponent },
      { path: 'Usuarios', component: ShowAllUserComponent },
      { path: 'Usuarios/Modificar', component: UpdateUserComponent },
      { path: 'Sucursales/Agregar', component: AddSucursalComponent },
      { path: 'Sucursales/Modificar', component: UpdateSucursalComponent },
      { path: 'Sucursales', component: ShowAllSucursalesComponent },
      { path: 'Reportes/Ganancias', component: ReportsEarningsComponent },
      { path: 'Reportes/Productos', component: ReportsProductsComponent },
      { path: 'Reportes/Sucursales', component: ReportsBranchOfficeComponent },
      { path: 'Reportes/Ventas', component: ReportsSalesComponent },
      { path: 'USuarios/Cargo', component : AddPositionComponent},
      { path: 'menu', component: MenuComponent}
    ]
  /*  children: [
      {path :'Producto/add',component:AddProductsComponent},
      {path:'Producto/producto',component:UpdateProductsComponent},
      {path:'Producto/productos',component:ShowAllProductsComponent},
      //delete
      {path :'Usuario/add',component:AddUserComponent},
      {path:'Usuario/usuarios',component:UpdateUserComponent},
      {path:'Usuario/usuarios',component:ShowAllUserComponent},
      //delete
      {path :'Cargo/add',component:AddUserComponent,
      {path:'Cargo/cargos',component:UpdateUserComponent},
      {path:'Cargo/cargos',component:ShowAllUserComponent},
      //delete
      {path :'Marca/add',component:AddProductsComponent},
      {path:'Marca/marcas',component:UpdateProductsComponent},
      {path:'Marca/marcas',component:ShowAllProductsComponent},
      //delete
      { path: 'menu', component: MenuComponent}
    ]
*/
  },


  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
