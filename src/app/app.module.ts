import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralOverviewComponent } from './core/overview/components/general-overview/general-overview.component';
import { CategoryComponent } from './core/overview/components/category/category.component';
import { ThreeDimensionalCssComponent } from './core/overview/components/three-dimensional-css/three-dimensional-css.component';
import { MiniGamesComponent } from './core/overview/components/mini-games/mini-games.component';
import { TicTacToeComponent } from './core/mini-games/3DTicTacToe/components/tic-tac-toe/tic-tac-toe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WinnerDialogComponent } from './core/mini-games/3DTicTacToe/components/winner-dialog/winner-dialog.component';
import { AnimationsComponent } from './core/overview/components/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralOverviewComponent,
    CategoryComponent,
    ThreeDimensionalCssComponent,
    MiniGamesComponent,
    TicTacToeComponent,
    WinnerDialogComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
