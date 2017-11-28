import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Todoresponse } from './todoresponse';
import { TodoService } from './todo.service';
@Injectable()
export class TodoresolveGuard implements Resolve<Todoresponse[]> {

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todoresponse[]> | Promise<Todoresponse[]> | Todoresponse[] {
    return this.todoService.getToDoList();
  }

}
