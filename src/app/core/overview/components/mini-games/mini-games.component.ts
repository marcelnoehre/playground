import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-mini-games',
  templateUrl: './mini-games.component.html',
  styleUrls: ['./mini-games.component.scss']
})
export class MiniGamesComponent implements OnInit {
  categories: Category[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
