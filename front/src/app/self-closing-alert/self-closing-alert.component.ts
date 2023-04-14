import { Component, OnInit, Input } from '@angular/core';
import { Message, MessageService } from '../message.service';

@Component({
  selector: 'app-self-closing-alert',
  templateUrl: './self-closing-alert.component.html',
  styleUrls: ['./self-closing-alert.component.css']
})
export class SelfClosingAlertComponent implements OnInit {
  @Input() message!: Message;
  @Input() delay: number = 10;

  constructor(public messageService: MessageService) { }

	ngOnInit(): void {
		setTimeout(() => this.messageService.delete(this.message), this.delay * 1000);
	}
}