import { TestBed } from '@angular/core/testing';

import { TodoItemManagerService } from './todo-item-manager.service';

describe('TodoItemManagerService', () => {
  let service: TodoItemManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoItemManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
