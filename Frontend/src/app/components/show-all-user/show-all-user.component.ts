import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { HomeComponent} from '../home/home.component';
import { faPlusCircle, faExclamationTriangle, faEdit } from '@fortawesome/free-solid-svg-icons';
import{ Cargo}from 'src/app/Modelo/Cargo';
import{CargoService} from 'src/app/Service/Cargo.service';
import { UsuarioService } from 'src/app/Service/Usuario.service';

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
  cargo :any =[]; //duda de esto
  usuario : any = [];
  constructor(private service:ServiceService,private servicioUsuario :UsuarioService,private servicioCargo : CargoService,private home: HomeComponent) { }

  ngOnInit() {
    // solo necesito que muestre la lista de los usuarios, poreso no se llama al metodo get CARGO
    this.getUsuario();
    
  }
  //SERVICIOS DE USUARIO
    getUsuario(){
      this.servicioUsuario.getUsuarios().subscribe(
        (data)=>{
          this.usuario=data;
        }
      )
    }
    createUsuario(usuario:Usuario){
      this.servicioUsuario.createUsuario(usuario).subscribe(data=>{
        console.log(data)
      },err=>{
        console.log(err)
      })
    }
    deleteUsuario(id:number){
      this.servicioUsuario.deleteUsuario(id).subscribe(
        data=>{
          console.log(data)
        },err =>{
          console.log(err)
        })
    }
  usuarioEditar() {
    this.home.router.navigate(['Usuarios/Modificar'], { relativeTo: this.home.route });
  }

  //SERVICIOS CARGO
    getCargo(){
      this.servicioCargo.getCargos().subscribe(
        (data)=>{
          this.cargo=data;
        } )
    }
    createCargo(cargo:Cargo){
      this.servicioCargo.createCargo(cargo).subscribe(
        data=>{
          console.log(data)
        },err =>{
          console.log(err)
        } )
    }
    deleteCargo(id:number){
      this.servicioCargo.deleteCargo(id).subscribe(
        data =>{
          console.log(data)
        },err =>{
          console.log(err)
        })
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
