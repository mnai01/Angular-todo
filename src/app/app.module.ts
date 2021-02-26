import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

// This is the Meeting place for all components
@NgModule({
  // Where the components go (including the main app component)
  declarations: [AppComponent, TodosComponent],
  // Add all modules here
  imports: [BrowserModule, AppRoutingModule],
  // Services you want to include go here
  providers: [],
  // just boostraping the main app component
  bootstrap: [AppComponent],
})
export class AppModule {}
