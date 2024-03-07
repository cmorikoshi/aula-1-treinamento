import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao',
  templateUrl: './cadastro-edicao.component.html',
  styleUrls: ['./cadastro-edicao.component.css']
})

export class CadastroEdicaoProdutosComponent {

  constructor(private produtoService: ProdutosService, private router: Router, private route: ActivatedRoute) { }

  produto  = {} as IProduto;

  produtoForm = new FormGroup({
    nomeProduto: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    quantidade: new FormControl(),
    preco: new FormControl()
  })

  id: number = 0;

  ngOnInit() {
    this.retornarProduto();

  }

  public retornarProduto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id)
    if (idNumber) {
      this.id = idNumber;
      this.produtoService.buscarProdutoId(idNumber).subscribe(
        (produto: any) => {
          produto = {... produto};
          // console.log(produto);
          this.produtoForm.patchValue(produto)},
         (error: any) => {
          console.error(error);},
         () => {}
      );     
    }
  }

  cadastrarEditarProdutos() {
    console.log(this.produtoForm.value)

    const produto = this.produtoForm.value as IProduto;

    if (this.id){
      produto.id = this.id;
    }

    this.produtoService.cadastrarEditarProduto(produto).subscribe
      ((result) => {
        console.log(result);
        swal.fire({
          title: "SUCESSO!!",
          text: `Produto ${this.id ? 'editado' : 'cadastrado'} com sucesso!`,
          icon: "success"
        });
        this.router.navigateByUrl('/produtos')
      },
        (erro) => {
          console.error(erro);
        });
  }
}

