import { Component, OnInit } from '@angular/core';
import { Charackter } from '../../interfaces/charackter';
import { Player } from '../../interfaces/player';
import { TicTacToeService } from '../../services/tic-tac-toe.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  player1!: Player;
  player2!: Player;
  turn!: number;
  board!: Charackter[];
  selectedCharackter!: Charackter;
  selected: any = {player: 1, selected: -1}

  constructor(
    private ticTacToe: TicTacToeService
  ) { }

  ngOnInit(): void {
    this.ticTacToe.player1$.subscribe((player1) => {
      this.player1 = player1;
    });
    this.ticTacToe.player2$.subscribe((player2) => {
      this.player2 = player2;
    });
    this.ticTacToe.turn$.subscribe((turn) => {
      this.turn = turn;
    });
    this.ticTacToe.board$.subscribe((board) => {
      this.board = board;
    });
    this.ticTacToe.selectedCharackter$.subscribe((selectedCharackter) => {
      this.selectedCharackter = selectedCharackter;
    });
    this.ticTacToe.startGame();
  }

  counter(i: number) {
    return new Array(i);
  }

  placeCharackter(id: number) {
    
  }
}
