import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralOverviewComponent } from './components/overview/general-overview/general-overview.component';
import { ThreeDimensionalCssComponent } from './components/overview/three-dimensional-css/three-dimensional-css.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralOverviewComponent,
    ThreeDimensionalCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
