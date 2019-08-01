import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { LeilaoComponent } from './leilao.component';
import { LeiloesService } from './shared/leiloes.service';
import { LeilaoFormComponent } from './leilao-form/leilao-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    LeilaoComponent,
    LeilaoFormComponent
  ],
  exports: [
    LeilaoComponent
  ],
  providers: [
    LeiloesService
  ]
})
export class LeiloesModule { }
