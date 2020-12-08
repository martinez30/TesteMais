import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dados } from '../_models/Dados';
import { BaseService } from './BaseService.service';

@Injectable({
  providedIn: 'root'
})
export class DadosService extends BaseService {

    constructor(private http: HttpClient) {
      super();
      this.baseUrl = this.baseUrl + 'dados';
    }

    getData(): Observable<Dados[]>{
      return this.http.get<Dados[]>(this.baseUrl);
    }

    getDataById(id: number): Observable<Dados>{
      return this.http.get<Dados>(`${this.baseUrl}/${id}`);
    }

    postDados(dados: Dados) {
      return this.http.post(this.baseUrl, dados);
    }

    putDados(dados: Dados) {
      return this.http.put(`${this.baseUrl}/${dados.id}`, dados);
    }
}
