import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { Color } from '../../interfaces/color';

@Component({
  selector: 'app-mini-games',
  templateUrl: './mini-games.component.html',
  styleUrls: ['./mini-games.component.scss']
})
export class MiniGamesComponent implements OnInit {
  categories: Category[] = [
    {
      header: 'Tic Tac Toe',
      icon: 'fa fa-xmark',
      color: Color.green,
      route: 'mini-games/3d-tic-tac-toe/'
    }
  ]; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
