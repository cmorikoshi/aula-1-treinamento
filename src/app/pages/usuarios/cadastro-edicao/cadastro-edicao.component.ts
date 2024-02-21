import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-edicao',
  templateUrl: './cadastro-edicao.component.html',
  styleUrls: ['./cadastro-edicao.component.css']
})
export class CadastroEdicaoUsuariosComponent {
usuarioForm = new FormGroup({
  nome: new FormControl('', Validators.required),
  idade: new FormControl()
})
}
