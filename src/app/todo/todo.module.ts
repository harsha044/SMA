import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from '../service/todo/todo.service';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'todo' , component : TodoComponent, children: [{ path: ':id', component: TodoDetailsComponent }] },
      //{ path: 'todo/:id', component: TodoDetailsComponent }
    ])
  ],
  declarations: [ TodoComponent, TodoListComponent, TodoDetailsComponent ],
  providers: [ TodoService ]
})
export class TodoModule { }
