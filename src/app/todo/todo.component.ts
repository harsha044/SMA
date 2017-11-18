import { TodoService } from './../service/todo/todo.service';
import { Todoresponse } from './../service/todo/todoresponse';
import { Component, OnInit, Inject } from '@angular/core';
import { IAppConstant } from '../service/appconstants/Iapp.constant';
import { AppConstant } from '../service/appconstants/app.constant';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task: Todoresponse = new Todoresponse();
  constructor(private todoService: TodoService, @Inject(AppConstant) private appValues: IAppConstant) { }

  ngOnInit() {
  }

  addTask() {
    this.todoService.addToDoList(this.task).subscribe((data) => console.log(data), (err) => console.log(err));
    this.task = new Todoresponse();
  }

}
