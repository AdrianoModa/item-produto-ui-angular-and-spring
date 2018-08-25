import { MessageToastService } from './../../shared/service/message-toast.service';
import { Produto } from './../../shared/entity/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/service/produto.service';
import { FormControl } from '@angular/forms';

import {MessageService} from 'primeng/api';
import { DISABLED } from '../../../../node_modules/@angular/forms/src/model';

@Component({
  selector: 'app-form-item-produto',
  templateUrl: './form-item-produto.component.html',
  styleUrls: ['./form-item-produto.component.css']
})
export class FormItemProdutoComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService, 
    private messageService: MessageService,
    private MessageToastService: MessageToastService
  ) { }

  ngOnInit() {
    this.buscar()    
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
      this.MessageToastService.msgAddProduto()
      frm.reset()
      // location.reload()
    })
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
      this.MessageToastService.msgUpdateProduto()
      frm.reset()
      // location.reload()
    })
  }  
}