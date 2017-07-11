import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NumberState } from '../classes/number-state';
import { Notification } from '../classes/notification'

import { CONSTANTS } from '../constants';

@Injectable()
export class GameService {

  // State information
  initialNumbers: number[] = [13, 2, 2, 2]
  currentNumbers: number[]
  selected: boolean[] = [false, false, false, false]
  indexSelected: number = CONSTANTS.DEFAULT_INDEX
  operatorSelected: string = CONSTANTS.DEFAULT_OPERATOR

  // Observable sources 
  private gameStateSource = new Subject<NumberState[]>();
  private operatorSource = new Subject<string>();
  private notificationSource = new Subject<Notification>();

  // Observable streams
  gameState$ = this.gameStateSource.asObservable();
  operator$ = this.operatorSource.asObservable();
  notification$ = this.notificationSource.asObservable();

  constructor() {
    this.currentNumbers = this.initialNumbers;
  }

  getState() {
    this.updateGameState()
  }

  // Arithmetic
  combine(a, b, op) {
    let success: boolean = true;
    let result: number = 0;
    switch (op) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if (b != 0) {
          result = a / b;
        } else {
          success = false;
        }
        break;
      default:
        success = false;
    }
    return {success, result}
  }

  selectNumber(index) {
    if (this.indexSelected == index) return;

    if (this.indexSelected == CONSTANTS.DEFAULT_INDEX) {
      this.indexSelected = index;
      this.selected[this.indexSelected] = true;
    } else {
      if (this.operatorSelected != CONSTANTS.DEFAULT_OPERATOR) {
        let firstNum: number = this.currentNumbers[this.indexSelected];
        let secondNum: number = this.currentNumbers[index];

        let {success, result} = this.combine(
          firstNum, secondNum, this.operatorSelected)

        if (success) {
          // Move number
          this.currentNumbers[this.indexSelected] = CONSTANTS.USED_NUMBER;
          this.currentNumbers[index] = result;

          // Move selection to new number
          this.selected[this.indexSelected] = false;
          this.indexSelected = index;
          this.selected[this.indexSelected] = true;

          // Reset operator
          this.selectOperator(CONSTANTS.DEFAULT_OPERATOR);
        }
      } else {
        // Move selection to new number
        this.selected[this.indexSelected] = false;
        this.indexSelected = index;
        this.selected[this.indexSelected] = true;
      }
    }

    // Update state
    this.notificationSource.next(new Notification(1, "Number selected"));
    this.updateGameState()

  }

  selectOperator(operator) {
    if (this.operatorSelected == operator) {
      this.operatorSelected = CONSTANTS.DEFAULT_OPERATOR;
      this.operatorSource.next(CONSTANTS.DEFAULT_OPERATOR);
      return;
    }

    if (this.indexSelected != CONSTANTS.DEFAULT_INDEX) {
      this.operatorSelected = operator;
      this.operatorSource.next(operator);
    }
  }

  updateGameState() {
    let newGameState: NumberState[] = [];

    for (let i in this.currentNumbers) {
      newGameState.push(
        new NumberState(i, this.currentNumbers[i], this.selected[i])
        )
    }

    this.gameStateSource.next(newGameState);
  }

}
