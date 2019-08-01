import { Routes, RouterModule } from '@angular/router';

import { LeilaoComponent } from './leilao.component';
import {LeilaoFormComponent} from "./leilao-form/leilao-form.component";

const leiloesRoutes: Routes = [
  { path: 'leilao', component: LeilaoComponent, pathMatch: 'full' },
  { path: 'leilao/new', component: LeilaoFormComponent},
  { path: 'leilao/:id', component: LeilaoFormComponent}
];

export const leiloesRouting = RouterModule.forChild(leiloesRoutes);
