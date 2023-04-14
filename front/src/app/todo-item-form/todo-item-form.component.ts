import { Component, Injectable, Input, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse } from '../api-response';
import { TodoItem, TodoItemManagerService } from '../todo-item-manager.service';

@Injectable()
@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.css']
})
export class TodoItemFormComponent {
  @Input() todoItem!: TodoItem;
  @Input() todoItems!: TodoItem[];
  @ViewChild('todoFormModal') todoFormModal!: any;
  errors: { [field: string]: (string | null) } = {};
  emptyTodoItem: () => TodoItem = this.todoItemManager.emptyTodoItem;

  constructor(
    private todoItemManager: TodoItemManagerService,
    private modalService: NgbModal
  ) { }

  open(): void {
		this.modalService.open(this.todoFormModal, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {}, () => {});
	}

  onSubmit(): void {
    let data: { [key: string]: string } = {};

    if (this.todoItem.deadline) {
      data = {
        text: this.todoItem.text,
        status: this.todoItem.status,
        deadline: this.todoItem.deadline
      };
    } else {
      data = {
        text: this.todoItem.text,
        status: this.todoItem.status
      };
    }

    let successCallback = (response: ApiResponse) => {
      this.modalService.dismissAll();
    };
    
    let failureCallback = (response: HttpErrorResponse) => {
      if (response.error.errors) {
        this.errors = response.error.errors;
      }
    };

    if (this.todoItem.id) {
      this.todoItemManager.update(this.todoItem, data, successCallback, failureCallback);
    } else {
      this.todoItemManager.create(this.todoItem, data, successCallback, failureCallback);
    }
  }
}
