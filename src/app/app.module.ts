import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberComponent } from './components/number/number.component';
import { GridComponent } from './components/grid/grid.component';

import { SolverService } from './services/solver.service';
import { GameService } from './services/game.service';
import { OperatorComponent } from './components/operator/operator.component';

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
    OperatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GameService, SolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
