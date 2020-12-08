import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { DadosService } from './_services/dados.service';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { AnswerComponent } from './answer/answer.component';
import { NavComponent } from './nav/nav.component';
import { Api_answerComponent } from './api_answer/api_answer.component';

@NgModule({
   declarations: [
      AppComponent,
      DadosComponent,
      AnswerComponent,
      Api_answerComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [
      DadosService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
