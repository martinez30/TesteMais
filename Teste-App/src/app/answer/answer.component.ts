import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.myFunction();
  }

  myFunction() {
    var listNumbers = [1,5,9,7,3,4,21,15,10,7];

    for(let i = 0; i < listNumbers.length; i++){
      setTimeout(function(){
        console.log(listNumbers[i]);
      }, listNumbers[i]);
    }
  }

}
