import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemProdutosComponent {
  tituloPagina: string = 'Produtos';
  produtos: IProduto[] = [];

  constructor(private produtosService: ProdutosService){}

  ngOnInit(){
    // this.usuarios = this.listarUsuarios();
    this.produtosService.buscarTodosProdutos().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    }, error => {
    console.error();
  })
  }

  listarUsuarios() {
    this.produtosService.buscarTodosProdutos().subscribe(produtos => {

    }, error => {
      console.error();
    })
  }

removerProduto(id: number){
  if(id){
this.exibirConfirmacao(id);
  }
}

exibirConfirmacao(id: number){
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
      this.produtosService.removerProduto(id).subscribe(
        (result) => {
      Swal.fire({
        title: "Removido!",
        text: "O item foi removido.",
        icon: "success"
      });
     this.produtos = this.produtos.filter(produto => produto.id != id)
    },  erro => {
      console.log(erro);
    });
  }
  });
}
}
