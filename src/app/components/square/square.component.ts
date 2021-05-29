import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input()
  value:string;
  @Input()
  numberSquare:number;


  @Output()
  clickSquare = new EventEmitter<number>();

  constructor() { }

  
  ngOnInit(): void {
  }

  onClick(){
    this.clickSquare.emit(this.numberSquare);
  }

}
