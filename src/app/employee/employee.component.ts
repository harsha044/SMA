import { Component, OnInit, DoCheck, ViewChild, 
  ViewChildren, QueryList, OnDestroy, AfterViewInit } from '@angular/core';
import { Employee } from "../service/employee/employee";
import { EmployeeService } from "../service/employee/employee.service";

import { DepartmentComponent } from "../department/department.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  //providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit {


    @ViewChild( DepartmentComponent ) departobj : DepartmentComponent;
    @ViewChildren( DepartmentComponent ) 
    departobjs : QueryList<DepartmentComponent>;
    
  employeename : String = "harsha";
  department : String = "IT";
  age : number = 30;
  toggle : boolean = false ;



  employee: Employee[];

  deptoggle(){
    this.toggle = !this.toggle;
  }
  message : string;

  receivefromchild(message : string){
      this.message = message;
      //this.departobj.msgs= "working in itwine";
      //this.departobjs.forEach((comp)=>comp.msgs = "working in itwine ");
  }
  msg :string = 'hello';
  constructor(private employeeService : EmployeeService ) { 
    console.log("this is constructor--parent"); 
  }

  ngOnInit() {
    this.employee = this.employeeService.getEmployees();
    this.departobj.msgs= "working in itwine";
    console.log("this is oninit event--parent");
  }

  
  ngDoCheck(){
    console.log("this is docheck event--parent");
  }

  ngOnDestroy(){
      console.log("this is destroy event--parent");
  }

  ngAfterViewInit(){
   /* this.departobjs.forEach((comp)=>
    setTimeout(() => comp.msgs = "working in itwine "));*/
  }

  
  

}
