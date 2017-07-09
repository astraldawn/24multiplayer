import { Component, OnDestroy } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs/Subscription';
import { NumberState } from '../../classes/number-state';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnDestroy {

  currentState: NumberState[];
  selected: boolean[];
  operators: any = ['+', '-', '*', '/'];
  gameServiceSubscription: Subscription;

  constructor(private gameService: GameService) {
    this.gameServiceSubscription = gameService.gameState$.subscribe(
      newState => {
        this.currentState = newState;
      });
    this.gameService.getState();
  }

  update() {

  }

  ngOnDestroy() {
    this.gameServiceSubscription.unsubscribe();
  }

}
