import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Employee } from '../../service/employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() empList : Employee[];
  @Input() title: string; 
  @Output() message : EventEmitter<string> = new EventEmitter<string>();
  constructor() { console.log("this is constructor--child"); }

  ngOnInit() {
    console.log("this is oninit event--child");
  }
  sendToParent(){
      this.message.emit("hi.. this is harsha");
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("this is onchanges event--child");
    console.log(changes);
  }

}
