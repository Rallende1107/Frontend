import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ShowAllUserComponent } from './components/show-all-user/show-all-user.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';

import { ShowAllSucursalesComponent } from './components/show-all-sucursales/show-all-sucursales.component';
import { UpdateSucursalComponent } from './components/update-sucursal/update-sucursal.component';
import { ServiceService } from '../app/Service/service.service';
import { MenuComponent } from './components/menu/menu.component';
import { TestComponent } from './components/test/test.component';
import { MarcasComponent } from './components/marcas/marcas.component';
// import { CtgrsComponent } from './Components/ctgrs/ctgrs.component';
// import { CategoriasComponent } from './Components/categorias/categorias.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UpdateUserComponent,
    ShowAllUserComponent,
    ShowAllProductsComponent,
    UpdateProductsComponent,
    ShowAllSucursalesComponent,
    UpdateSucursalComponent,
    MenuComponent,
    TestComponent,
    MarcasComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
