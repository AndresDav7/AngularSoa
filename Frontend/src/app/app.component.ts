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


}