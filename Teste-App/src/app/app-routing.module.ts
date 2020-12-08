import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerComponent } from './answer/answer.component';
import { Api_answerComponent } from './api_answer/api_answer.component';
import { DadosComponent } from './dados/dados.component';

const routes: Routes = [
  {path : 'api', component: Api_answerComponent},
  {path : 'answer', component: AnswerComponent},
  {path : '', component: DadosComponent},
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
