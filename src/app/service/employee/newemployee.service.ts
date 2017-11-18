import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
@Injectable()
export class NewemployeeService extends EmployeeService {

  constructor() { super() }

  getEmployees() : Employee[] {
    return this.employee =  [
      {id:1,name:'Harsha',address:'Bangalore'},
      {id:2,name:'Naveen',address:'Siruggupa'},
      {id:3,name:'Praveen',address:'Mysore'},
      {id:4,name:'Prajwal',address:'Hassan'},
      {id:5,name:'Guru',address:'Sindhanoor'}
    ];
  }

}
