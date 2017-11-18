import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todoresponse } from './todoresponse';
@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { console.log("todo service") }

  getToDoList() {
    //,{headers : new HttpHeaders().set('token','thisistoken').set('newtoken','this is new token') }
    return this.http.get<Todoresponse[]>('https://jsonplaceholder.typicode.com/todos', { headers: new HttpHeaders().set('token', 'thisistoken') });
  }

  addToDoList(task: Todoresponse) {
    return this.http.post<Todoresponse>('https://jsonplaceholder.typicode.com/todos', task);
  }

}
