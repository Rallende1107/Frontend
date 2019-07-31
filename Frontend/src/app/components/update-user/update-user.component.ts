import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number
  nombre: string;
  apellidos: string;
  rut: string;
  cargo: string;
  sucursal: string;
  email: string;
  emailconfirmed: string;
  password: string;
  passwordConfirmed: string;
  constructor() { }

  ngOnInit() {
  }

  modificar() {
    if (this.nombre === undefined ||
      this.apellidos === undefined ||
      this.rut === undefined ||
      this.cargo === undefined ||
      this.sucursal === undefined ||
      this.email === undefined ||
      this.emailconfirmed === undefined ||
      this.password === undefined ||
      this.passwordConfirmed === undefined) {
      alert('uno o mas campos estan vacio');

    }

    if (this.password != this.passwordConfirmed) {

      alert('Las contrasenas no coinciden');
    }
    if (this.email != this.emailconfirmed) {
      alert('Los emails ingresados no coinciden');
    }


  }
}
