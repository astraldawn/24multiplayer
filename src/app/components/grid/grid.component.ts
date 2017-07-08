import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  currentState: any = [];
  operators: any = ['+', '-', '*', '/']

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.currentState = this.gameService.getState()
  }

}
