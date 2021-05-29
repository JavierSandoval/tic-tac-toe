import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: Array<string>
  nextOne: string;
  lastMove: string;
  winner: string;
  reset: boolean;

  constructor() {
    this.squares = new Array<string>(9);
    this.nextOne = 'Jugador 1';
    this.lastMove = 'O';
    this.winner = ''
    this.reset = false;
  }

  ngOnInit(): void {
  }

  handleClick(num: number){
    if(this.squares[num] == null && this.calculateWinner() == null){
      if (this.lastMove === 'O') {
        this.squares[num] = 'X'
        this.lastMove = 'X';
        if(this.nextOne == 'Jugador 2') this.nextOne = 'Jugador 1';
        if(this.calculateWinner() != null) this.reset = true;
      } else {
        this.squares[num] = 'O';
        this.lastMove = 'O';
        if(this.nextOne == 'Jugador 1') this.nextOne = 'Jugador 2';
        if(this.calculateWinner() != null) this.reset = true;
      }
    } else {
      this.winner = 'Ganador: ' + this.nextOne;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

  onReset(){
    this.squares = new Array<string>(9);
    this.reset = false;
  }

}
