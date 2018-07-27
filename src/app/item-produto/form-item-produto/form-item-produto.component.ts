import { Produto } from './../../shared/entity/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/service/produto.service';
import { FormControl } from '@angular/forms';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-form-item-produto',
  templateUrl: './form-item-produto.component.html',
  styleUrls: ['./form-item-produto.component.css'],
  providers: [MessageService]
})
export class FormItemProdutoComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService, private messageService: MessageService) { }

  ngOnInit() {
    this.buscar()    
  }

  msgAddProduto() { 
    this.messageService.add({severity:'success', summary: 'O Produto foi cadastrado com sucesso!', detail:'Cadastrar de Produto', closable: true});
  }

  msgUpdateProduto() { 
    this.messageService.add({severity:'success', summary: 'O Produto foi atualizado com sucesso!', detail:'Atualizar de Produto', closable: true});
  }  

  buscar(){
    this.produtoService.getProdutos()
    .subscribe(dados => this.produtos = dados)
  }

  buscarPorId(frm: FormControl){
    this.produtoService.getProdutosPorId(frm.value)
    .subscribe(dados => this.produtos = dados)
  }

  adicionar(frm: FormControl){
    this.produtoService.postProdutos(frm.value)
    .subscribe(dados => {
      frm.reset()
    })
    location.reload()
  }

  salvar(frm: FormControl){
    if(frm.value.id){
      this.atualizar(frm)
    }else{
      this.adicionar(frm)
    }
  }

  atualizar(frm: FormControl){
    this.produtoService.putProduto(frm.value)
    .subscribe(dados => {
      frm.reset()
    })
    location.reload()
  }  
}