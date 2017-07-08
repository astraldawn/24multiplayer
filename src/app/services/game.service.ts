import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  initialState: number[] = [13, 2, 2, 2]
  currentState: number[]

  constructor() {
    this.currentState = this.initialState;
  }

  getState() {
    return this.currentState;
  }

}
