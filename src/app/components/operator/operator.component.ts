import { Component, Input, OnDestroy } from '@angular/core';
import { GameService } from '../../services/game.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {

  @Input() operator: any;
  selected: boolean = false;
  operatorStateSubscription: Subscription;

  constructor(private gameService: GameService) {
    this.operatorStateSubscription = gameService.operator$.subscribe(
      operator => {
        this.selected = (operator == this.operator);
      })
  }

  select() {
    this.gameService.selectOperator(this.operator);
  }

  ngOnDestroy() {
    this.operatorStateSubscription.unsubscribe();
  }
}
