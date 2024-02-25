import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

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
    // this.usuarios = this.listarUsuarios();
    this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, error => {
    console.error();
  })
  }

  listarUsuarios() {
    this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {

    }, error => {
      console.error();
    })
  }

removerUsuario(id: number){
  if(id){
this.exibirConfirmacao(id);
  }
}

exibirConfirmacao(id: number){
  Swal.fire({
    title: "Tem certeza que quer excluir este item?",
    text: "Nãotem como desfazer!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, remova!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.usuariosService.removerUsuario(id).subscribe(
        (result) => {
          this.usuarios.filter(usuarioLista => usuarioLista.id != id)
      Swal.fire({
        title: "Removido!",
        text: "O item foi removido.",
        icon: "success"
      });
    },  erro => {
      console.log(erro);
    });
  }
  });
}

}
