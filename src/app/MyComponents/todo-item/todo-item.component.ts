import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() ind: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();

  handleDelete(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('OnClick triggerd');
  }

  handleCheck(todo: Todo) {
    this.todoCheck.emit(todo);
  }
}
