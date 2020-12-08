import { Component, OnInit } from '@angular/core';
import { APIService } from '../_services/API.service';

@Component({
  selector: 'app-api_answer',
  templateUrl: './api_answer.component.html',
  styleUrls: ['./api_answer.component.scss']
})
export class Api_answerComponent implements OnInit {

  api: JSON;
  apiJson: string;

  constructor(
    private http: APIService
  ) { }

  ngOnInit() {
    this.constructAPI();
  }

  constructAPI(){
    this.http.getAPI().subscribe(response =>
      console.log(JSON.parse(JSON.stringify(response)))
      );
  }


}
