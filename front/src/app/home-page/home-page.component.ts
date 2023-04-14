import { Component, Injectable, ViewChild } from '@angular/core';
import { TodoItemFormComponent } from '../todo-item-form/todo-item-form.component';
import { TodoItem, TodoItemManagerService } from '../todo-item-manager.service';

@Injectable()
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('todoItemForm') todoItemForm!: TodoItemFormComponent;
  currentTodoItem: TodoItem = this.todoItemManager.emptyTodoItem();

  constructor(public todoItemManager: TodoItemManagerService) { }

  ngOnInit(): void {
    this.todoItemManager.load();
  }

  editItem(item: TodoItem): void {
    this.todoItemForm.open();
    this.currentTodoItem = this.todoItemManager.cloneTodoItem(item);
  }

  deleteItem(item: TodoItem): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.todoItemManager.delete(item);
    }
  }
}
