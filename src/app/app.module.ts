import { AppComponent } from './app.component';
import { AngularmatModule } from './shared/angularmat.module';
import { AppConstant, Appvalues } from './service/appconstants/app.constant';
import { AuthGuard } from './service/guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';

import { DepartmentComponent } from './department/department.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeService } from './service/employee/employee.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';

import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login/login.service';

import { NewemployeeService } from './service/employee/newemployee.service';
import { NgModule } from '@angular/core';

import { OnboardingModule } from './onboarding/onboarding.module';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { RoutingModule } from './routing/routing.module';

import { SharedModule } from './shared/shared.module';

//import { TodoModule } from './todo/todo.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule, 
    SharedModule, 
    AngularmatModule, 
    //TodoModule, 
    RoutingModule, 
    OnboardingModule
  ],
  providers: [
    //EmployeeService
    AuthGuard,
    { provide: EmployeeService, useClass: NewemployeeService },
    { provide: LoginService, useClass: LoginService },
    { provide: AppConstant, useValue: Appvalues },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
  //exports:[  ]
})
export class AppModule { }
