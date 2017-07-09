export class NumberState {
  index: number;
  number: number;
  selected: boolean;

  constructor(index, number, selected) {
    this.index = index;
    this.number = number;
    this.selected = selected;
  }
}
