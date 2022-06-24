import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { Color } from '../../interfaces/color';

@Component({
  selector: 'app-general-overview',
  templateUrl: './general-overview.component.html',
  styleUrls: ['./general-overview.component.scss']
})
export class GeneralOverviewComponent implements OnInit {
  categories: Category[] = [
    {
      header: '3D-CSS',
      icon: 'fa fa-cube',
      color: Color.lila,
      route: '3d-css/'
    },
    {
      header: 'Mini-Games',
      icon: 'fa fa-gamepad',
      color: Color.orange,
      route: 'mini-games/'
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
