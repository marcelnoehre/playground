import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './core/mini-games/3DTicTacToe/components/tic-tac-toe/tic-tac-toe.component';
import { GeneralOverviewComponent } from './core/overview/components/general-overview/general-overview.component';
import { MiniGamesComponent } from './core/overview/components/mini-games/mini-games.component';
import { ThreeDimensionalCssComponent } from './core/overview/components/three-dimensional-css/three-dimensional-css.component';

const routes: Routes = [  
{ path: '', component: GeneralOverviewComponent },
{ path: '3d-css', component: ThreeDimensionalCssComponent},
{ path: 'mini-games', component: MiniGamesComponent},
{ path: 'mini-games/3d-tic-tac-toe', component: TicTacToeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }