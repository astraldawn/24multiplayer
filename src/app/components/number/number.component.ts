import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { NumberState } from '../../classes/number-state';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input() numberState:NumberState;
  hidden: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    if (this.numberState.number == CONSTANTS.USED_NUMBER) {
      this.hidden = true;
      this.numberState.number = null;
    }
  }

  public select() {
    if (this.hidden) return;
    
    this.gameService.selectNumber(this.numberState.index);
  }
}
