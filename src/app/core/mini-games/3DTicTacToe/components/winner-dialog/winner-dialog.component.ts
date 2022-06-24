import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TicTacToeService } from '../../services/tic-tac-toe.service';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent implements OnInit, OnDestroy {
  winner!: number;

  constructor(private ticTacToe: TicTacToeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.ticTacToe.startGame();
  }


}
