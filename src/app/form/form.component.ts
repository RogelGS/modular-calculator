import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() addResult = new EventEmitter<string>();

  numberOne: string = "";
  numberTwo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addResult.emit(+this.numberOne + this.numberTwo);
  }
}
