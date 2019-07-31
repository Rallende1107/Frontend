import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { HomeComponent} from '../home/home.component';
import { faPlusCircle, faExclamationTriangle, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  //iconos
  iconAdd = faPlusCircle;
  iconEdit = faEdit;
  iconDelete = faExclamationTriangle;

  Usuarios:Usuario[];
  constructor(private service:ServiceService,private home: HomeComponent) { }

  ngOnInit() {
    //TIENEN QUE DESCOMENTAR ESTO
    // this.service.getUsuarios()
    // .subscribe(data=>{
    //   this.Usuarios=data;
    // }), ErrorEvent;
  }

  usuarioEditar() {
    this.home.router.navigate(['Usuarios/Modificar'], { relativeTo: this.home.route });
  }

  agregar(usuario) {
    console.log(usuario);
    if (
      (
      usuario.nombre === "" ||
      usuario.apellidos === "" ||
      usuario.rut === "" ||
      usuario.cargo === "" ||
      usuario.sucursal === "" ||
      usuario.email === "" ||
      usuario.emailconfirmed === "" ||
      usuario.password === "" ||
      usuario.passwordConfirmed === ""
      )
      ||
      (
        usuario.nombre === undefined ||
        usuario.apellidos === undefined ||
        usuario.rut === undefined ||
        usuario.cargo === undefined ||
        usuario.sucursal === undefined ||
        usuario.email === undefined ||
        usuario.emailconfirmed === undefined ||
        usuario.password === undefined ||
        usuario.passwordConfirmed === undefined
      )
      ) {
      alert('uno o mas campos estan vacio');

    }

    if (usuario.password != usuario.passwordConfirmed) {

      alert('Las contrasenas no coinciden');
    }
    if (usuario.email != usuario.emailconfirmed) {
      alert('Los emails ingresados no coinciden');
    }


  }


}
