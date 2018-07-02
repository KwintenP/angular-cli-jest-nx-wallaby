import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../types/test.type';

@Component({
  selector: 'myworkspacename-input-error-wallaby',
  templateUrl: './input-error-wallaby.component.html',
  styleUrls: ['./input-error-wallaby.component.css']
})
export class InputErrorWallabyComponent implements OnInit {
  @Input() test: Test;

  constructor() { }

  ngOnInit() {
  }

}
