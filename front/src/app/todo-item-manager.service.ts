import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from './api-response';
import { catchError, throwError } from 'rxjs';
import { AuthManagerService } from './auth-manager.service';
import { MessageService } from './message.service';

export interface TodoItem {
  text: string;
  status: string;
  deadline: string | null;
  id: number | null;
  created_at: string | null;
  user_id: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class TodoItemManagerService {
  todoItems: TodoItem[] = [];
  filteredTodoItems: TodoItem[] = [];

  constructor(
    private http: HttpClient,
    private authManager: AuthManagerService,
    private messageService: MessageService
  ) { }
  
  emptyTodoItem(): TodoItem {
    return {
      id: null,
      text: '',
      status: '',
      deadline: null,
      created_at: null,
      user_id: null
    };
  }

  getFiltered(): TodoItem[] {
    return this.filteredTodoItems;
  }

  find(id: number): TodoItem | null {
    let items = this.todoItems.filter(i => i.id === id);

    return items.length ? items[0] : null;
  }

  cloneTodoItem(item: TodoItem): TodoItem {
    return {
      id: item.id,
      text: item.text,
      status: item.status,
      deadline: item.deadline,
      created_at: item.created_at,
      user_id: item.user_id,
    };
  }

  load(
    successCallback: ((response: ApiResponse) => void) | null = null, 
    failureCallback: ((response: HttpErrorResponse) => void) | null = null
  ): void {
    this.http.get<ApiResponse>('api/todo')
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.afterFailureResponse(response, failureCallback);
          
          return throwError(() => new Error('Todo items fetch failed.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        this.todoItems = <TodoItem[]> response.data;
        this.filteredTodoItems = <TodoItem[]> response.data;

        this.afterSuccessResponse(response, successCallback);
      });
  }

  create(
    item: TodoItem, 
    data: any,
    successCallback: ((response: ApiResponse) => void) | null = null, 
    failureCallback: ((response: HttpErrorResponse) => void) | null = null
  ): void {
    this.http.post<ApiResponse>('api/todo', data)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.afterFailureResponse(response, failureCallback);
          
          return throwError(() => new Error('Todo creation failed.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        this.todoItems.push(<TodoItem> <unknown> response.data);
        this.afterSuccessResponse(response, successCallback);
      });
  }

  update(
    item: TodoItem, 
    data: any,
    successCallback: ((response: ApiResponse) => void) | null = null, 
    failureCallback: ((response: HttpErrorResponse) => void) | null = null
  ): void {
    this.http.put<ApiResponse>('api/todo/' + item.id, data)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.afterFailureResponse(response, failureCallback);
          
          return throwError(() => new Error('Todo edition failed.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        let todoItem = <TodoItem> <unknown> response.data;
        for (let i in this.todoItems) {
          if (this.todoItems[i].id === todoItem.id) {
            this.todoItems[i] = todoItem;
            break;
          }
        }
        this.afterSuccessResponse(response, successCallback);
      });
  }

  delete(
    item: TodoItem, 
    successCallback: ((response: ApiResponse) => void) | null = null, 
    failureCallback: ((response: HttpErrorResponse) => void) | null = null
  ): void {
    this.http.delete<ApiResponse>('api/todo/' + item.id)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.afterFailureResponse(response, failureCallback);
          
          return throwError(() => new Error('Todo deletion failed.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        this.todoItems.splice(this.todoItems.indexOf(item), 1);
        this.afterSuccessResponse(response, successCallback);
      });
  }

  private afterSuccessResponse(
    response: ApiResponse,
    successCallback: ((response: ApiResponse) => void) | null = null
  ): void {
    this.authManager.updateSession();
    if (response.message) {
      this.messageService.add(response.message);
    }
    if (successCallback) {
      successCallback(response);
    }
  }

  private afterFailureResponse(
    response: HttpErrorResponse, 
    failureCallback: ((response: HttpErrorResponse) => void) | null = null
  ): void {
    this.authManager.updateSession();
    if (response.error.error) {
      this.messageService.add(response.error.error, 'danger');
    }
    if (failureCallback) {
      failureCallback(response);
    }
  }
}
