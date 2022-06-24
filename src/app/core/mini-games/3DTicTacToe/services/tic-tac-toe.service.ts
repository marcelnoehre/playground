import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Charackter } from '../interfaces/charackter';
import { Player } from '../interfaces/player';
import { CharackterSize, GameColor, GameIcon } from '../interfaces/tic-tac-toe';
import { MatDialog } from '@angular/material/dialog';
import { WinnerDialogComponent } from '../components/winner-dialog/winner-dialog.component';

@Injectable({
	providedIn: 'root'
})
export class TicTacToeService {
    private _player1: BehaviorSubject<Player> = new BehaviorSubject<Player>({color: GameColor.player1, charackters: []});    
    private _player2: BehaviorSubject<Player> = new BehaviorSubject<Player>({color: GameColor.player2, charackters: []});
    private _turn: BehaviorSubject<number> = new BehaviorSubject<number>(1); 
    private _board: BehaviorSubject<Charackter[]> = new BehaviorSubject<Charackter[]>([]);
    private _selectedCharackter: BehaviorSubject<Charackter> = new BehaviorSubject<Charackter>({id: '', icon: '', size: '', color: '', available: true});

    constructor(private dialog: MatDialog) {
        
    }

    setPlayer1(player1 : Player) {
        this._player1.next(player1);
    }

    setPlayer2(player2: Player) {
        this._player2.next(player2);
    }

    setTurn(turn: number) {
        this._turn.next(turn);
    }

    setBoard(board: Charackter[]) {
        this._board.next(board);
    }

    setSelectedCharackter(selectedCharackter: Charackter) {
        this._selectedCharackter.next(selectedCharackter);
    }

    get player1$() {
        return this._player1.asObservable();
    }

    get player2$() {
        return this._player2.asObservable();
    }

    get turn$() {
        return this._turn.asObservable();
    }

    get board$() {
        return this._board.asObservable();
    }

    get selectedCharackter$() {
        return this._selectedCharackter.asObservable();
    }

    startGame() {
        let charackters1: Charackter[] = [];
        let charackters2: Charackter[] = [];
        for(let i = 0; i < 9; i++) {
            if(i < 3) {
                charackters1.push({
                    id: '' + 1 + '-' + i,
                    icon: GameIcon.player1, 
                    size: CharackterSize.small, 
                    color: GameColor.player1,
                    available: true
                });
                charackters2.push({
                    id: '' + 2 + '-' + i,
                    icon: GameIcon.player2, 
                    size: CharackterSize.small, 
                    color: GameColor.player2,
                    available: true
                });
            } else if(i > 5) {
                charackters1.push({
                    id: '' + 1 + '-' + i,
                    icon: GameIcon.player1, 
                    size: CharackterSize.big, 
                    color: GameColor.player1,
                    available: true
                });
                charackters2.push({
                    id: '' + 2 + '-' + i,
                    icon: GameIcon.player2, 
                    size: CharackterSize.big, 
                    color: GameColor.player2,
                    available: true
                });
            } else {
                charackters1.push({
                    id: '' + 1 + '-' + i,
                    icon: GameIcon.player1, 
                    size: CharackterSize.middle, 
                    color: GameColor.player1,
                    available: true
                });
                charackters2.push({
                    id: '' + 2 + '-' + i,
                    icon: GameIcon.player2, 
                    size: CharackterSize.middle, 
                    color: GameColor.player2,
                    available: true
                });
            }
        }
        let board = [];
        for(let i = 0; i < 9; i++) {
            board.push({
                id: '',
                icon: '', 
                size: '',
                color: '',
                available: true
            });
        }
        this.setPlayer1({color: GameColor.player1, charackters: charackters1});        
        this.setPlayer2({color: GameColor.player2, charackters: charackters2});
        this.setSelectedCharackter({id: '', icon: '', size: '', color: '', available: true});
        this.setBoard(board);
        this.setTurn(1);
    }

    onWin(winner: number) {
        let dialogRef = this.dialog.open(WinnerDialogComponent);
        let instance = dialogRef.componentInstance;
        instance.winner = winner; 
    }
}
