import { Component, OnInit } from '@angular/core';
import { ClientespringService } from './service/clientespring.service';
import { Cliente } from './service/Cliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  clientes: Cliente[];
  myFormCliente: FormGroup;
  cliente: Cliente[];
  title = 'frontend';
  idGet: number;
  titulo: string;

  constructor( public servc:ClientespringService){}

  ngOnInit(){
    this.obtenerClientes()

    this.myFormCliente = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl('')
    });
  }

    obtenerClientes(){
      this.servc.getClientes().subscribe(r=>{
        console.table(r);
        return this.clientes=r
      })
    }

    ingresarDatos(){
        let nombre = this.myFormCliente.value.nombre;
        let apellido = this.myFormCliente.value.apellido
        let direccion = this.myFormCliente.value.direccion
        let telefono = this.myFormCliente.value.telefono
        let email = this.myFormCliente.value.email

        this.servc.addClinetes(nombre,apellido,direccion,telefono,email)
        .subscribe(r =>{
          this.obtenerClientes()
          this.myFormCliente = new FormGroup({
            nombre: new FormControl(''),
            apellido: new FormControl(''),
            direccion: new FormControl(''),
            telefono: new FormControl(''),
            email: new FormControl('')
          });
        })
    }

    actualizarDatos(id: number){
      this.servc.getClientesId(id).subscribe(r=>{
        this.cliente = r;
        this.titulo='Actualizar datos de ' + this.cliente['nombre'];
        this.myFormCliente = new FormGroup({
          nombre: new FormControl(this.cliente['nombre']),
          apellido: new FormControl(this.cliente['apellido']),
          direccion: new FormControl(this.cliente['direccion']),
          telefono: new FormControl(this.cliente['telefono']),
          email: new FormControl(this.cliente['email'])
        });
        this.idGet=this.cliente['idCliente']
      })
    }

    eliminarDatos(id: number){
      this.servc.deleteClientes(id).subscribe(r =>{
        this.obtenerClientes()
      })
    }


}