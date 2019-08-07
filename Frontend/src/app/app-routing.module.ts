// Edicion Rene Allende

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { ShowAllUserComponent } from './components/show-all-user/show-all-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdateSucursalComponent } from './components/update-sucursal/update-sucursal.component';
import { ShowAllSucursalesComponent } from './components/show-all-sucursales/show-all-sucursales.component';
import { MenuComponent } from './components/menu/menu.component';
import { TestComponent } from './components/test/test.component';
import { MarcasComponent } from './components/marcas/marcas.component';


// import { CategoriasComponent } from './components/categorias/categorias.component';

// se debe agregar algo ?


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'Productos/Modificar', component: UpdateProductsComponent },
      { path: 'Productos', component: ShowAllProductsComponent },
      { path: 'Usuarios', component: ShowAllUserComponent },
      { path: 'Usuarios/Modificar', component: UpdateUserComponent },
      { path: 'Sucursales/Modificar', component: UpdateSucursalComponent },
      { path: 'Sucursales', component: ShowAllSucursalesComponent },
      { path: 'menu', component: MenuComponent},
      // { path: 'Marcas', component: TestComponent },
      { path: 'Marcas', component: MarcasComponent },
      { path: 'cate', component: TestComponent }

    ]
  },

  // { path: 'prueba', component: TestComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
