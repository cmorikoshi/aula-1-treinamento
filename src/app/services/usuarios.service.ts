import { Component, ViewEncapsulation }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  buscarTodosUsuarios(){
    return this.http.get<IUsuario[]>('http://localhost:3000/usuarios');
 }
}
