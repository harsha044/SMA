import { Component } from '@angular/core';
import { EmployeeService } from './service/employee/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toggle : boolean = false;
  constructor(private employeeService: EmployeeService){}
  toggleEmp(){
    this.toggle = !this.toggle;
  }

  addemp(){
    this.employeeService.addEmployee();
  }
  
}
