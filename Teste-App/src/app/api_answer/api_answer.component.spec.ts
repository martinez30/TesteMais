/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Api_answerComponent } from './api_answer.component';

describe('Api_answerComponent', () => {
  let component: Api_answerComponent;
  let fixture: ComponentFixture<Api_answerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api_answerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api_answerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
