import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './shared/service/produto.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {DataListModule} from 'primeng/datalist';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { ItemProdutoComponent } from './item-produto/item-produto.component';
import { FormItemProdutoComponent } from './item-produto/form-item-produto/form-item-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemProdutoComponent,
    FormItemProdutoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    DataListModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    ToastModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
