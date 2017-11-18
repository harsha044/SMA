import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo/todo.service';
import { Todoresponse } from '../../service/todo/todoresponse';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todoResponse: Todoresponse[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getToDoList().subscribe((data) => this.todoResponse = data);
  }

}
