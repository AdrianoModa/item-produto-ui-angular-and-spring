import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageToastService {

  constructor(private messageService: MessageService) { }

  timeLife = 3000

  msgAddProduto() { 
    this.messageService.add({
      severity:'success', 
      summary: 'O Produto foi cadastrado com sucesso!', 
      detail:'Cadastrar de Produto',
      life: this.timeLife
    });
  }

  msgUpdateProduto() { 
    this.messageService.add({
      severity:'success', 
      summary: 'O Produto foi atualizado com sucesso!', 
      detail:'Atualizar de Produto', 
      closable: true,
      life: this.timeLife
    });
  }

  msgRemoverProduto() { 
    this.messageService.add({
      severity:'success', 
      summary: 'O Produto foi removido com sucesso!', 
      detail:'Remover de Produto', 
      closable:true,
      life: this.timeLife
    });
  }

  msgRemoverProdutoErro() { 
    this.messageService.add({
      severity:'error', 
      summary: 'O Produto não foi removido', 
      detail:'Remover de Produto',
      life: this.timeLife
    });
  }

  msgConfirm(){
    this.messageService.clear();
    this.messageService.add({
      sticky: true, 
      severity:'warn', 
      summary:'Deseja remover o produto ?', 
      detail:'Remover Produto',
      life: this.timeLife
  });
  }

}
