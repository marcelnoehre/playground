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
        this.checkWin();
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

  checkWin() {
    let zero = this.board[0].id == ''? 0 : this.board[0].id.startsWith('1')? 1 : 2;
    let one = this.board[1].id == ''? 0 : this.board[1].id.startsWith('1')? 1 : 2;
    let two = this.board[2].id == ''? 0 : this.board[2].id.startsWith('1')? 1 : 2;
    let three = this.board[3].id == ''? 0 : this.board[3].id.startsWith('1')? 1 : 2;
    let four = this.board[4].id == ''? 0 : this.board[4].id.startsWith('1')? 1 : 2;
    let five = this.board[5].id == ''? 0 : this.board[5].id.startsWith('1')? 1 : 2;
    let six = this.board[6].id == ''? 0 : this.board[6].id.startsWith('1')? 1 : 2;
    let seven = this.board[7].id == ''? 0 : this.board[7].id.startsWith('1')? 1 : 2;
    let eight = this.board[8].id == ''? 0 : this.board[8].id.startsWith('1')? 1 : 2;
    if(zero == one && zero == two && zero != 0) {
      this.ticTacToe.onWin(zero);
    } else if(three == four && three == five && three != 0) {
      this.ticTacToe.onWin(three);
    } else if(six == seven && six == eight && six != 0) {
      this.ticTacToe.onWin(six);
    } else if(zero == three && zero == six && zero != 0) {
      this.ticTacToe.onWin(zero);
    } else if (one == four && one == seven && one != 0) {
      this.ticTacToe.onWin(one);
    } else if (two == five && two == eight && two != 0) {
      this.ticTacToe.onWin(two);
    } else if (zero == four && one == eight && zero != 0) {
      this.ticTacToe.onWin(zero);
    } else if (two == four && two == six && two != 0) {
      this.ticTacToe.onWin(two);
    }
  }
}
