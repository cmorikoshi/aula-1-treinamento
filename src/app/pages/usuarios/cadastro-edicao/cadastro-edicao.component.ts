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

  usuario  = {} as IUsuario;

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl()
  })

  id: number = 0;

  ngOnInit() {
    this.retornarUsuario();

  }

  public retornarUsuario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id)
    if (idNumber) {
      this.id = idNumber;
      this.usuarioService.buscarUsuarioId(idNumber).subscribe(
        (usuario: any) => {
          usuario = {... usuario};
          // console.log(usuario);
          this.usuarioForm.patchValue(usuario)},
         (error: any) => {
          console.error(error);},
         () => {}
      );     
    }
  }

  cadastrarEditarUsuarios() {
    console.log(this.usuarioForm.value)

    const usuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;

    if (this.id){
      usuario.id = this.id;
    }

    this.usuarioService.cadastrarEditarUsuario(usuario).subscribe
      ((result) => {
        console.log(result);
        swal.fire({
          title: "SUCESSO!!",
          text: `Usuário ${this.id ? 'editado' : 'cadastrado'} com sucesso!`,
          icon: "success"
        });
        this.router.navigateByUrl('/usuarios')
      },
        (erro) => {
          console.error(erro);
        });
  }
}
