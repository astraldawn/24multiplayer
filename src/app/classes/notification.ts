export class Notification {
  type: number;
  message: string;

  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
}
