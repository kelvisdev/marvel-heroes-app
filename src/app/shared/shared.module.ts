import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    ButtonActionComponent,
    CardTitleComponent
  ],
  exports: [
    ButtonActionComponent,
    CardTitleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
