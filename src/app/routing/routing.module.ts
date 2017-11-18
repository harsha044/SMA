import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
//import { TodoComponent } from '../todo/todo.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule, SharedModule,
    RouterModule.forRoot([
      { path: 'employee' , component : EmployeeComponent },
      { path: 'department' , component : DepartmentComponent },
      //{ path: 'todo' , component : TodoComponent },
      { path: 'onboarding' , component : OnboardingComponent },
      { path:'', redirectTo : 'employee', pathMatch: 'full' },
      { path:'**', component : PagenotfoundComponent }
    ])
  ],
  declarations: []
})

export class RoutingModule { }
