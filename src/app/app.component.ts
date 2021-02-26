import { Component } from '@angular/core';

// typescript decorator
// contains meta data for component
@Component({
  // points to app-root element in index.html
  selector: 'app-root',
  // html template
  templateUrl: './app.component.html',
  // style template
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'angular-crash-todolist';
}
