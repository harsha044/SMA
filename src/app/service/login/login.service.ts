import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable()
export class LoginService {
  islogin: boolean = false;
  constructor() { }

  role: string;


  login(user: User){
    if(user.userName == "test" && user.Password == 'test'){
      this.role = "User";
       this.islogin = true;
    }else if(user.userName == "Admin" && user.Password == 'Admin'){
      this.role = "Admin";
      this.islogin = true;
    }
    return this.islogin;
  }




}
