import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  categories: Category[] = []; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
