import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {

  constructor(private gameService: GameService) { }

  @Input() operator: any;
}
