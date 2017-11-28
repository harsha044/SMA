
import { AuthGuard } from './../service/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

//import { AuthGuard } from '../service/guards/auth.guard';

import { TodoService } from '../service/todo/todo.service';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoresolveGuard } from './../service/todo/todoresolve.guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: TodoComponent, canActivate: [AuthGuard],
        resolve :{
          todoList: TodoresolveGuard
        },
        canActivateChild: [AuthGuard],
        children: [{ path: ':id', component: TodoDetailsComponent }]
      },
      //{ path: 'todo/:id', component: TodoDetailsComponent }
    ])
  ],
  declarations: [TodoComponent, TodoListComponent, TodoDetailsComponent],
  providers: [
    TodoService,
    TodoresolveGuard
  ]
})
export class TodoModule { }
