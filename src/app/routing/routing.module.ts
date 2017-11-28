import { AuthGuard } from './../service/guards/auth.guard';
import { LoginComponent } from './../login/login.component';
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
//import { AuthGuard } from '../service/guards/auth.guard';
@NgModule({
  imports: [
    CommonModule, SharedModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
      { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
      { path: 'todo', loadChildren: '../todo/todo.module#TodoModule' },
      { path: 'onboarding', component: OnboardingComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: []
})

export class RoutingModule { }
