import { Injectable } from '@angular/core';

export class Message {
  constructor(
    public content: string,
    public type: string = 'success'
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  all(): Message[] {
    return this.messages;
  }

  add(message: string, type: string = 'success'): void {
    this.messages.push(new Message(message, type));
  }

  delete(message: Message): void {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
