import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-three-dimensional-css',
  templateUrl: './three-dimensional-css.component.html',
  styleUrls: ['./three-dimensional-css.component.scss']
})
export class ThreeDimensionalCssComponent implements OnInit {
  categories: Category[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
