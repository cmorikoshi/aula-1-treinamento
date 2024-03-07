
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor (private http: HttpClient) { }
  api = 'http://localhost:3000/produtos';

  buscarTodosProdutos(){
    return this.http.get<IProduto[]>(this.api);
 }

cadastrarEditarProduto(Produto: IProduto){
  if (Produto.id){
    return this.http.put(`${this.api}/${Produto.id}`, Produto);
  }
  return this.http.post(this.api, Produto);
}

removerProduto(id: number){
  return this.http.delete(`${this.api}/${id}`)
}
buscarProdutoId(id: number){
  return this.http.get<IProduto[]>(`${this.api}/${id}`);
}
}
