import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemUsuariosComponent {
  tituloPagina: string = 'Usuários';
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService){}

  ngOnInit(){
    this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, error => {
    console.error();
  })
  }
}
