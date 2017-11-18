import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable()
export class EmployeeService {
 employee : Employee[] = [];
  constructor() { }
    getEmployees() : Employee[] {
      return this.employee =  [
        {id:1,name:'Harsha',address:'Bangalore'},
        {id:2,name:'Naveen',address:'Siruggupa'},
        {id:3,name:'Praveen',address:'Mysore'},
        {id:4,name:'Prajwal',address:'Hassan'}
      ];
    }

    addEmployee() {
        let emp:Employee ={id:5,name:'Anil',address:'Kolar'};
        this.employee.push(emp);
    }
}
