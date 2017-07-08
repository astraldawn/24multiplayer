import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  constructor(private gameService: GameService) { }

  @Input() number: any;
}
