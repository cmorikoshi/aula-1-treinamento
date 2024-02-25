import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao',
  templateUrl: './cadastro-edicao.component.html',
  styleUrls: ['./cadastro-edicao.component.css']
})
export class CadastroEdicaoUsuariosComponent {

  constructor(private usuarioService: UsuariosService, private router: Router, private route: ActivatedRoute) { }

  usuario = {} as IUsuario;

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl()
  })

  ngOnInit() {
    this.retornarUsuario();

  }

  public retornarUsuario(): void {
    const usuarioId = this.route.snapshot.paramMap.get('id');

    if (usuarioId !== null) {
      this.usuarioService.buscarUsuarioId(+usuarioId).subscribe(
        (usuario: IUsuario[]) => {
          usuario = {... usuario};
          console.log(usuario);
          this.usuarioForm.patchValue(this.usuario);
        },
         (error: any) => {
          console.error(error);
         },
         () => {}
      );     
    }

  }

  cadastrarUsuarios() {
    console.log(this.usuarioForm.value)

    const usuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;

    this.usuarioService.cadastrarUsuario(usuario).subscribe
      ((result) => {
        console.log(result);
        swal.fire({
          title: "Cadastro realizado com sucesso!!",
          text: "Clique no botão para confirmar!!",
          icon: "success"
        });
        this.router.navigateByUrl('/usuarios')
      },
        (erro) => {
          console.error(erro);
        });
  }
}
