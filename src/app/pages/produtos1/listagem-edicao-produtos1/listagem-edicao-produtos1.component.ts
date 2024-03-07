
import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem-edicao-produtos1',
  templateUrl: './listagem-edicao-produtos1.component.html',
  styleUrls: ['./listagem-edicao-produtos1.component.css']
})
export class ListagemEdicaoProdutos1Component {

  tituloPagina: string = 'Promoção';
  produtos: IProduto[] = [];
  produto = {} as IProduto;
  produtoEditar: IProduto[] = [];
  editar: boolean = false;
  remover:boolean = false;

  constructor(private produtoService: ProdutosService, private router: Router, private route: ActivatedRoute) { }

  produtoForm = new FormGroup({
    nomeProduto: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    quantidade: new FormControl(),
    preco: new FormControl()
  })

  ngOnInit() {
    // this.usuarios = this.listarUsuarios();
    this.produtoService.buscarTodosProdutos().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    }, error => {
      console.error();
    })


    this.retornarProduto();
  }

  listarUsuarios() {
    this.produtoService.buscarTodosProdutos().subscribe(produtos => {

    }, error => {
      console.error();
    })
  }

  mudarPaginaCadastro(id: number) {
    const divLista = document.getElementById('lista') as HTMLDivElement;
    divLista.style.display = 'none';
    const divCadastro = document.getElementById('cadastro') as HTMLDivElement;
    divCadastro.style.display = '';

 
     const produto = this.produtos.find(produto => produto.id === id);

     this.produtoForm.patchValue({
      nomeProduto: produto?.nomeProduto,
      codigoBarras: produto?.codigoBarras,
      quantidade: produto?.quantidade,
      preco: produto?.preco
     })
      this.id = id;
     console.log(this.produtos);
      // if (this.produtos) {
      //   const nameInput = document.getElementById('fruit-name') as HTMLInputElement;
      //   const colorInput = document.getElementById('fruit-color') as HTMLInputElement;
      
      //   nameInput.value = selectedFruit.name;
      //   colorInput.value = selectedFruit.color;
      }


  

  mudarPaginaRetorno() {
    const divLista = document.getElementById('lista') as HTMLDivElement;
    divLista.style.display = '';
    const divCadastro = document.getElementById('cadastro') as HTMLDivElement;
    divCadastro.style.display = 'none';
    this.editar = false;
  }

  removerProduto(id: number) {
    if (id) {
      this.exibirConfirmacao(id);
    }
  }

  exibirConfirmacao(id: number) {
    Swal.fire({
      title: "Tem certeza que quer excluir este item?",
      text: "Não tem como desfazer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, remova!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.removerProduto(id).subscribe(
          (result) => {
            Swal.fire({
              title: "Removido!",
              text: "O item foi removido.",
              icon: "success"
            });
            this.produtos = this.produtos.filter(produto => produto.id != id)
          }, erro => {
            console.log(erro);
          });
      }
    });
  }



  id: number = 0;



  public retornarProduto(): void {

  }

  cadastrarEditarProdutos() {
    // console.log(this.produtoForm.value)

    // const produto = this.produtoForm.value as IProduto;

    // if (this.id) {
    //   produto.id = this.id;
    // }

    // this.produtoService.cadastrarEditarProduto(produto).subscribe
    //   ((result) => {
    //     console.log(result);
    //     swal.fire({
    //       title: "SUCESSO!!",
    //       text: `Produto ${this.id ? 'editado' : 'cadastrado'} com sucesso!`,
    //       icon: "success"
    //     });
    //     this.router.navigateByUrl('/produtos')
    //   },
    //     (erro) => {
    //       console.error(erro);
    //     });
  }
}


