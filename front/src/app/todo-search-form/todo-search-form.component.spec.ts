import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSearchFormComponent } from './todo-search-form.component';

describe('TodoSearchFormComponent', () => {
  let component: TodoSearchFormComponent;
  let fixture: ComponentFixture<TodoSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
