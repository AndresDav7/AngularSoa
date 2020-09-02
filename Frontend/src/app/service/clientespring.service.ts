import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientespringService {


    URL = "http://localhost:9090/clientes";

  constructor(private httpc: HttpClient) {
  }

  getClientes(): Observable<Cliente[]> {
    return this.httpc.get<Cliente[]>(this.URL);
  }

  getClientesId(id: number): Observable<Cliente[]> {
    const url = `${this.URL}/${id}`;
    return this.httpc.get<Cliente[]>(url);
  }

  addClinetes(nombre:string, apellido:string, direccion:string, telefono:string, email:string)
  {
    let obj ={nombre,apellido,direccion,telefono,email}
    return this.httpc.post(this.URL,obj);

    
  }

  updateClientes(id: number,nombre:string, apellido:string, direccion:string, telefono:string, email:string){
    const url = `${this.URL}/${id}`;
    let obj ={nombre,apellido,direccion,telefono,email}
    return this.httpc.put<Cliente>(url, obj);
  }

  deleteClientes(id: number){
    const url = `${this.URL}/${id}`; 
    return this.httpc.delete(url);
  }



}