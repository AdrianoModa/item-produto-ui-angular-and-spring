import { ProdutoService } from './../shared/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/entity/produto';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.css'],
  providers: [MessageService]
})
export class ItemProdutoComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService, private messageService: MessageService) { }

  ngOnInit() {
    this.listarProdutos()  
  }

  listarProdutos(){
    this.produtoService.getProdutos()
    .subscribe(dados => this.produtos = dados)
  }

  msgRemoverProduto() { 
    this.messageService.add({severity:'success', summary: 'O Produto foi removido com sucesso!', detail:'Remover de Produto', closable:true});
  }

  msgRemoverProdutoErro() { 
    this.messageService.add({severity:'error', summary: 'O Produto não foi removido', detail:'Remover de Produto'});
  }

  msgConfirm(){
    this.messageService.clear();
    this.messageService.add({sticky: true, severity:'warn', summary:'Deseja remover o produto ?', detail:'Remover Produto'});
  }
   
  remover(produto){
    if (confirm('Deseja remover o produto ' + produto.nomeProduto + '?')) {	
      const index = this.produtos.indexOf(produto)
      this.produtos.splice(index, 1)	
      this.msgRemoverProduto()    
      this.produtoService.deleteProdutos(produto)      
        .subscribe(null, 	
          err => {	
            alert('Produto não removido.')
            this.produtos.splice(index, 0, produto)
          }
      );	
    }
  }  
}