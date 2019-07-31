import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ShowAllUserComponent } from './components/show-all-user/show-all-user.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { ReportsProductsComponent } from './components/reports-products/reports-products.component';
import { ReportsEarningsComponent } from './components/reports-earnings/reports-earnings.component';
import { AddSucursalComponent } from './components/add-sucursal/add-sucursal.component';
import { ShowAllSucursalesComponent } from './components/show-all-sucursales/show-all-sucursales.component';
import { UpdateSucursalComponent } from './components/update-sucursal/update-sucursal.component';
import { ServiceService } from '../app/Service/service.service';
import { MenuComponent } from './components/menu/menu.component';
import { ReportsSalesComponent } from './components/reports-sales/reports-sales.component';
import { ReportsBranchOfficeComponent } from './components/reports-branch-office/reports-branch-office.component';
import { Login2Component } from './components/login2/login2.component';



import { ProducMattyComponent } from './Components/produc-matty/produc-matty.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { from } from 'rxjs';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddUserComponent,
    AddProductsComponent,
    ReportsComponent,


    UpdateUserComponent,
    ShowAllUserComponent,
    ShowAllProductsComponent,
    UpdateProductsComponent,

    RecoveryPasswordComponent,
    ReportsProductsComponent,
    ReportsEarningsComponent,
    AddSucursalComponent,
    ShowAllSucursalesComponent,
    UpdateSucursalComponent,
    // NewBrandComponent,


    MenuComponent,
    ReportsSalesComponent,
    ReportsBranchOfficeComponent,
    Login2Component,
    ProducMattyComponent,
    AddPositionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
