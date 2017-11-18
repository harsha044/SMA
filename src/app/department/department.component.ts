import { Component, OnInit, Input } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

import { Department } from './department';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() msgs : String;

  department : Department = new Department();
  constructor() { }

  ngOnInit() {

  }

  addDepartment(){
    console.log(this.department);
  }

}
