import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // todos is a type of Todo which represents an object created in the model
  todos: Todo[];

  constructor() {}

  // Similar to componentDidMount() in react"
  // vode means it returns nothing
  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo 1',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: false,
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: true,
      },
    ];
  }
}
