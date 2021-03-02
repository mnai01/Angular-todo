import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // Input property
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}
  // Set Dynamic Classes
  // todo class always applied
  // is completed only added if input box checked
  setClasses() {
    let classes = {
      todo: true,
      // in reference to the todo passed in from the input
      'is-complete': this.todo.completed,
    };

    return classes;
  }
}
