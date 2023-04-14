import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoItem, TodoItemManagerService } from '../todo-item-manager.service';
import { AuthManagerService } from '../auth-manager.service';

@Component({
  selector: 'app-todo-search-form',
  templateUrl: './todo-search-form.component.html',
  styleUrls: ['./todo-search-form.component.css']
})
export class TodoSearchFormComponent {
  readonly ASC = 'ASC';
  readonly DESC = 'DESC';
  textSearch: string = '';
  statusSearch: string = '';
  deadlineFrom: string = '';
  deadlineTo: string = '';
  createdFrom: string = '';
  createdTo: string = '';
  sortBy: string = '';
  sortDirection: string = this.ASC;

  constructor(
    private  todoItemManager: TodoItemManagerService,
    private modalService: NgbModal,
    private authManager: AuthManagerService
  ) { }

  onSearch(): void {
    this.todoItemManager.filteredTodoItems = this.todoItemManager.todoItems
      .filter(t => this.textSearch ? t.text.includes(this.textSearch) : true)
      .filter(t => this.statusSearch ? t.status.includes(this.statusSearch) : true)
      .filter(t => this.deadlineFrom ? (t.deadline && (t.deadline >= this.deadlineFrom)) : true)
      .filter(t => this.deadlineTo ? (t.deadline && (t.deadline <= this.deadlineTo)) : true)
      .filter(t => this.createdFrom ? (t.created_at && (t.created_at >= this.createdFrom)) : true)
      .filter(t => this.createdTo ? (t.created_at && (t.created_at <= this.createdTo)) : true);

    if (this.sortBy) {
      let key = this.sortBy as keyof TodoItem;
      this.todoItemManager.filteredTodoItems = this.todoItemManager.filteredTodoItems
        .filter(t => t[key] !== null)
        .sort((a: TodoItem, b: TodoItem): number => {
          let first = a[key] as string;
          let second = b[key] as string;
          if (first === second) {
            return 0;
          } else if ((this.sortDirection === this.ASC) ? (first < second) : (first > second)) {
            return -1;
          } else {
            return 1;
          }
        });
    }
    
    this.modalService.dismissAll();
    this.authManager.keepSessionAlive();
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {}, () => {});
	}
}
