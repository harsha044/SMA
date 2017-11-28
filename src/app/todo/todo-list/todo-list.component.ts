import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo/todo.service';
import { Todoresponse } from '../../service/todo/todoresponse';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todoResponse: Todoresponse[];
  constructor(private todoService: TodoService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    //this.todoService.getToDoList().subscribe((data) => this.todoResponse = data);
    this.route.data.subscribe((data)=>this.todoResponse=data['todoList']);
    //console.log(data['todoList'])
  }

}
