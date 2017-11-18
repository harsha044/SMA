import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeService } from './service/employee/employee.service';
import { NewemployeeService } from './service/employee/newemployee.service';
import { AppConstant, Appvalues } from './service/appconstants/app.constant';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { RoutingModule } from './routing/routing.module';
import { TodoModule } from './todo/todo.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule, SharedModule, TodoModule, RoutingModule, OnboardingModule
    
  ],
  providers: [
    //EmployeeService
    { provide: EmployeeService, useClass: NewemployeeService },
    { provide: AppConstant, useValue: Appvalues },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
  // exports:[EmployeeComponent]
})
export class AppModule { }
