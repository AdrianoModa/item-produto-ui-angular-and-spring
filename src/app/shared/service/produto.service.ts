import { Produto } from './../entity/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

  constructor(private httpCliente: HttpClient) { }

  produtoURL = 'http://localhost:8080/produto'

  getProdutos(){
    return this.httpCliente.get<Produto[]>(`${this.produtoURL}`)
  }

  getProdutosPorId(id: number) {
    return this.httpCliente.get<Produto[]>(`${this.produtoURL}/${id}`)
  }

  postProdutos(produto: any){
    return this.httpCliente.post(`${this.produtoURL}`, produto)
  }

  putProduto(produto: any){
    return this.httpCliente.put(`${this.produtoURL}/${produto.id}`, produto)
  }

  deleteProdutos(id: number) {
    return this.httpCliente.delete(`${this.produtoURL} + '/' + ${id}`)
  }

}
