import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralOverviewComponent } from './components/overview/general-overview/general-overview.component';
import { ThreeDimensionalCssComponent } from './components/overview/three-dimensional-css/three-dimensional-css.component';

const routes: Routes = [  
{ path: '', component: GeneralOverviewComponent },
{ path: '3d-css', component: ThreeDimensionalCssComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }