import { LoginService } from './../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../service/login/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User = new User();
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    //this.user = { Password: 'test', userName: 'test' }
    if(this.loginservice.login(this.user)){
      this.router.navigate(['todo']);
      //redirect
    }
    //nothing
  }

}
