import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralOverviewComponent } from './core/overview/components/general-overview/general-overview.component';
import { MiniGamesComponent } from './core/overview/components/mini-games/mini-games.component';
import { ThreeDimensionalCssComponent } from './core/overview/components/three-dimensional-css/three-dimensional-css.component';

const routes: Routes = [  
{ path: 'playground', component: GeneralOverviewComponent },
{ path: 'playground/3d-css', component: ThreeDimensionalCssComponent},
{ path: 'playground/mini-games', component: MiniGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }