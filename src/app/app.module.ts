import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NumberComponent } from './components/number/number.component';
import { GridComponent } from './components/grid/grid.component';

import { SolverService } from './services/solver.service';
import { GameService } from './services/game.service';
import { OperatorComponent } from './components/operator/operator.component';
import { NotificationComponent } from './components/notification/notification.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'grid',
    pathMatch: 'full'
  },
  {
    path: 'grid',
    component: GridComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    GridComponent,
    OperatorComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    MdSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [GameService, SolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
