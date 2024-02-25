import { Component, ViewEncapsulation }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost:3000/usuarios';

  buscarTodosUsuarios(){
    return this.http.get<IUsuario[]>(this.api);
 }

cadastrarUsuario(usuario: IUsuario){
  return this.http.post(this.api, usuario);
}
removerUsuario(id: number){
  return this.http.delete(`${this.api}/${id}`)
}
buscarUsuarioId(id: number){
  return this.http.get<IUsuario[]>(`${this.api}/${id}`);
}
}
