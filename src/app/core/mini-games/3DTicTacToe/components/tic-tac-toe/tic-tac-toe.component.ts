import { Component, OnInit } from '@angular/core';
import { Charackter } from '../../interfaces/charackter';
import { Player } from '../../interfaces/player';
import { CharackterSize, GameColor } from '../../interfaces/tic-tac-toe';
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

  selectCharackter(player: number, charackter: Charackter) {
    if(this.turn == player && charackter.available) {
      this.ticTacToe.setSelectedCharackter(charackter);
    }
  }

  placeCharackter(id: number) {
    if(this.selectedCharackter.id != '') {
      let check = false
      if(this.board[id].id == '') {
        check = true;
      } else {
        let color = this.board[id].id.startsWith('1')? 1 : 2;
        if (color != this.turn) {
          let actualId: number = + this.board[id].id.charAt(this.board[id].id.length-1);
          let newId: number = +this.selectedCharackter.id.charAt(this.selectedCharackter.id.length-1);
          if(actualId < 3) {
            if(newId > 2) {
              check = true;
            }
          } else if(actualId > 5) {
          } else {
            if(newId > 5) {
              check = true
            }
          }
        }
      }
      if(check) {
        this.board[id] = this.selectedCharackter;
        this.ticTacToe.setBoard(this.board);
        if(this.turn == 1) {
          this.player1.charackters[+this.selectedCharackter.id.charAt(this.selectedCharackter.id.length-1)].available = false;
          this.ticTacToe.setPlayer1(this.player1);
        } else {
          this.player2.charackters[+this.selectedCharackter.id.charAt(this.selectedCharackter.id.length-1)].available = false;
          this.ticTacToe.setPlayer2(this.player2);
        }
        this.ticTacToe.setSelectedCharackter({id: '', icon: '', size: '', color: '', available: true});
        this.ticTacToe.setTurn(this.turn == 1? 2 : 1);
      }
    }
  }
}
